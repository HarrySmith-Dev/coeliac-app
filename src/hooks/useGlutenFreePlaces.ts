import { keepPreviousData, skipToken, useQuery } from '@tanstack/react-query'
import { useUserLocation } from './useUserLocation'
import { fetchGlutenFreePlaces, OverpassError } from '@/api/overpass'
import { PLACES_CACHE_TIME, PLACES_MAX_ATTEMPTS, PLACES_QUERY_KEY } from '@/constants/places'
import { roundCoordinates } from '@/utils/coordinates'

const isRetryable = (error: Error) =>
  !(error instanceof OverpassError) ||
  error.status === undefined ||
  error.status === 429 ||
  error.status >= 500

export const useGlutenFreePlaces = () => {
  const { searchCentre } = useUserLocation()
  const searchLocation = searchCentre && roundCoordinates(searchCentre)

  return useQuery({
    queryKey: [PLACES_QUERY_KEY, searchLocation],
    queryFn: searchLocation
      ? ({ signal }) => fetchGlutenFreePlaces(searchLocation, signal)
      : skipToken,
    placeholderData: keepPreviousData,
    staleTime: PLACES_CACHE_TIME,
    gcTime: PLACES_CACHE_TIME,
    retry: (failureCount, error) => failureCount < PLACES_MAX_ATTEMPTS - 1 && isRetryable(error),
    retryDelay: (attempt) => 2000 * 2 ** attempt,
  })
}
