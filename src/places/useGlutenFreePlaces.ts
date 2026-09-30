import { keepPreviousData, skipToken, useQuery } from '@tanstack/react-query'
import { useUserLocation } from '../location/LocationContext'
import type { LocationCoordinates } from '../location/types'
import { fetchGlutenFreePlaces, OverpassError } from './overpass'

export const PLACES_QUERY_KEY = 'glutenFreePlaces'

export const PLACES_CACHE_TIME = 24 * 60 * 60 * 1000

const MAX_ATTEMPTS = 3

const roundCoordinates = ([lat, lng]: LocationCoordinates): LocationCoordinates => [
  Math.round(lat * 1000) / 1000,
  Math.round(lng * 1000) / 1000,
]

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
    retry: (failureCount, error) => failureCount < MAX_ATTEMPTS - 1 && isRetryable(error),
    retryDelay: (attempt) => 2000 * 2 ** attempt,
  })
}
