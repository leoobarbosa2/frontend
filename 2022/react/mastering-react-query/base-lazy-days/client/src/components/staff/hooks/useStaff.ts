import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { useQuery } from 'react-query';

import { Staff } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { filterByTreatment } from '../utils';

// for when we need a query function for useQuery
async function getStaff(): Promise<Staff[]> {
  const { data } = await axiosInstance.get('/staff');
  return data;
}

interface UseStaff {
  staff: Staff[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

export function useStaff(): UseStaff {
  const [filter, setFilter] = useState('all');
  const hasFilter = filter === 'all';

  const selectFn = useCallback((data) => filterByTreatment(data, filter), [
    filter,
  ]);

  const { data: staff = [] } = useQuery(queryKeys.staff, getStaff, {
    select: hasFilter ? undefined : selectFn,
  });

  return { staff, filter, setFilter };
}
