import { useQuery, useQueryClient } from 'react-query';

import type { Treatment } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';

// for when we need a query function for useQuery
async function getTreatments(): Promise<Treatment[]> {
  const { data } = await axiosInstance.get('/treatments');
  return data;
}

export function useTreatments(): Treatment[] {
  const fallback = [];
  const { treatments } = queryKeys;
  const { data = fallback } = useQuery(treatments, getTreatments);

  return data;
}

export function usePrefetchTreatments(): void {
  const queryClient = useQueryClient();
  const { treatments } = queryKeys;

  queryClient.prefetchQuery(treatments, getTreatments, {
    staleTime: 600000,
    cacheTime: 900000,
  });
}
