import { skipToken, useQuery } from '@tanstack/react-query'
import { useUserLocation } from './useUserLocation'
import { fetchGlutenFreePlaces, OverpassError } from '@/api/overpass'
import {
  PLACES_CACHE_TIME,
  PLACES_MAX_ATTEMPTS,
  PLACES_QUERY_KEY,
  PLACES_RETRY_BASE_DELAY,
} from '@/constants/places'
import { roundCoordinates } from '@/utils/coordinates'

export const isRetryable = (error: Error) =>
  !(error instanceof OverpassError) ||
  error.status === undefined ||
  error.status === 429 ||
  error.status >= 500

export const isBlocked = (error: Error | null) =>
  error instanceof OverpassError && (error.status === 403 || error.status === 406)

export const isBusy = (error: Error | null) =>
  error instanceof OverpassError && [429, 502, 503, 504].includes(error.status ?? 0)

export const getRetryDelay = (attempt: number) => PLACES_RETRY_BASE_DELAY * 3 ** attempt

export const useGlutenFreePlaces = () => {
  const { searchCentre } = useUserLocation()
  const searchLocation = searchCentre && roundCoordinates(searchCentre)

  return useQuery({
    queryKey: [PLACES_QUERY_KEY, searchLocation],
    queryFn: searchLocation
      ? ({ signal }) => fetchGlutenFreePlaces(searchLocation, signal)
      : skipToken,
    staleTime: PLACES_CACHE_TIME,
    gcTime: PLACES_CACHE_TIME,
    retry: (failureCount, error) => failureCount < PLACES_MAX_ATTEMPTS - 1 && isRetryable(error),
    retryDelay: getRetryDelay,
  })
}
