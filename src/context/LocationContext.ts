import { createContext } from 'react'
import type { LocationCoordinates } from '@/types/location'

export type MapFocus = { position: LocationCoordinates }

type LocationContextValue = {
  userLocation: LocationCoordinates | null
  searchCentre: LocationCoordinates | null
  mapFocus: MapFocus | null
  isRequestingLocation: boolean
  locationError: string | null
  requestLocation: () => void
  searchArea: (centre: LocationCoordinates) => void
}

export const LocationContext = createContext<LocationContextValue | null>(null)
