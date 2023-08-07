import { useMutation, useQueryClient } from 'react-query';

import { Appointment } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { useCustomToast } from '../../app/hooks/useCustomToast';

// for when server call is needed
async function removeAppointmentUser(appointment: Appointment): Promise<void> {
  const patchData = [{ op: 'remove', path: '/userId' }];
  await axiosInstance.patch(`/appointment/${appointment.id}`, {
    data: patchData,
  });
}

// TODO: update return type
export function useCancelAppointment(): (appointment: Appointment) => void {
  const queryClient = useQueryClient();
  const toast = useCustomToast();
  const { mutate } = useMutation(
    (appointToCancel: Appointment) => removeAppointmentUser(appointToCancel),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.appointments]);
        toast({
          description: 'The Appointment has been removed',
          status: 'warning',
        });
      },
    },
  );

  return (appointment: Appointment) => {
    mutate(appointment);
  };
}
