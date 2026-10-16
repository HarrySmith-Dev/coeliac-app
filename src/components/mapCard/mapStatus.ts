import { SEARCH_RADIUS_METRES } from '@/constants/map'
import { isBlocked, isBusy } from '@/hooks/useGlutenFreePlaces'

const searchRadiusLabel = `${SEARCH_RADIUS_METRES / 1000} km`

type MapStatusInput = {
  locationError: string | null
  hasSearchCentre: boolean
  isFetching: boolean
  failureCount: number
  isSlowSearch: boolean
  error: Error | null
  placeCount?: number
}

export type MapStatus = {
  message: string
  canRetry: boolean
}

const status = (message: string, canRetry = false): MapStatus => ({ message, canRetry })

export const getMapStatus = ({
  locationError,
  hasSearchCentre,
  isFetching,
  failureCount,
  isSlowSearch,
  error,
  placeCount,
}: MapStatusInput): MapStatus => {
  if (locationError) {
    return status(locationError)
  }
  if (!hasSearchCentre) {
    return status('Share your location or search an area of the map')
  }
  if (isFetching && failureCount > 0) {
    return status('The place search service is busy, trying again...')
  }
  if (isSlowSearch) {
    return status(
      'Still searching. Places come from a free public service that can be slow at busy times.',
    )
  }
  if (isFetching) {
    return status('Searching for gluten-free spots...')
  }
  if (isBlocked(error)) {
    return status('The place search service is unavailable right now. Please try again later.')
  }
  if (isBusy(error)) {
    return status('The place search service is busy right now. Please try again in a minute.', true)
  }
  if (error) {
    return status("Couldn't load gluten-free spots.", true)
  }
  if (placeCount === undefined) {
    return status('Searching for gluten-free spots...')
  }
  if (placeCount === 0) {
    return status(`No gluten-free spots found within ${searchRadiusLabel}`)
  }
  return status(
    `${placeCount} gluten-free spot${placeCount === 1 ? '' : 's'} within ${searchRadiusLabel}`,
  )
}
