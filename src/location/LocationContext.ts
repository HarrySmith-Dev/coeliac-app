import { createContext, useContext } from 'react'
import type { LocationCoordinates } from './types'

type LocationContextValue = {
  userLocation: LocationCoordinates | null
  isRequestingLocation: boolean
  requestLocation: () => void
}

export const LocationContext = createContext<LocationContextValue | null>(null)

export const useUserLocation = () => {
  const context = useContext(LocationContext)

  if (!context) {
    throw new Error('useUserLocation must be used within a LocationProvider')
  }

  return context
}
