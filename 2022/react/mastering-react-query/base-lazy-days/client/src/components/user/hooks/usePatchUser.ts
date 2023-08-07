import jsonpatch from 'fast-json-patch';
import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';

import { User } from '../../../../../shared/types';
import { axiosInstance, getJWTHeader } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { useCustomToast } from '../../app/hooks/useCustomToast';
import { useUser } from './useUser';

// for when we need a server function
async function patchUserOnServer(
  newData: User | null,
  originalData: User | null,
): Promise<User | null> {
  if (!newData || !originalData) return null;
  // create a patch for the difference between newData and originalData
  const patch = jsonpatch.compare(originalData, newData);

  // send patched data to the server
  const { data } = await axiosInstance.patch(
    `/user/${originalData.id}`,
    { patch },
    {
      headers: getJWTHeader(originalData),
    },
  );
  return data.user;
}

export function usePatchUser(): UseMutateFunction<
  User,
  unknown,
  User,
  unknown
> {
  const toast = useCustomToast();
  const { user, updateUser } = useUser();
  const queryClient = useQueryClient();
  const { mutate: patchUser } = useMutation(
    (newUserData: User) => patchUserOnServer(newUserData, user),
    {
      onMutate: async (newUserData: User | null) => {
        await queryClient.cancelQueries(queryKeys.user);

        const previousUserData: User = queryClient.getQueryData(queryKeys.user);

        updateUser(newUserData);

        return { previousUserData };
      },
      onError: (_error, _newData, context) => {
        // rollback cached saved value
        if (context.previousUserData) {
          updateUser(context.previousUserData);
          toast({
            title: 'Updated failed, restoring previous values',
            status: 'warning',
          });
        }
        // rollback cache to saved value
      },
      onSuccess: (userData: User | null) => {
        if (user) {
          toast({
            description: 'User has been updated!',
            status: 'success',
          });
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries(queryKeys.user);
      },
    },
  );

  return patchUser;
}
