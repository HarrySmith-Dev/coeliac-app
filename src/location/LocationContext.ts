import { createContext, useContext } from 'react'
import type { LocationCoordinates } from './types'

export type MapFocus = { position: LocationCoordinates }

type LocationContextValue = {
  userLocation: LocationCoordinates | null
  searchCentre: LocationCoordinates | null
  mapFocus: MapFocus | null
  isRequestingLocation: boolean
  requestLocation: () => void
  searchArea: (centre: LocationCoordinates) => void
}

export const LocationContext = createContext<LocationContextValue | null>(null)

export const useUserLocation = () => {
  const context = useContext(LocationContext)

  if (!context) {
    throw new Error('useUserLocation must be used within a LocationProvider')
  }

  return context
}
