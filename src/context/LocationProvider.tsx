import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { DEFAULT_LOCATION } from '@/constants/map'
import { LocationContext, type MapFocus } from './LocationContext'
import { loadSearchCentre, saveSearchCentre } from '@/utils/searchCentreStorage'
import type { LocationCoordinates } from '@/types/location'

const devLocationOverride: LocationCoordinates | null = import.meta.env.DEV
  ? DEFAULT_LOCATION
  : null

const savedSearchCentre = loadSearchCentre()

const locationErrors = {
  unsupported:
    "Your browser can't share your location. You can still drag the map and use Search this area.",
  denied:
    'Location access was denied. You can still drag the map and use Search this area, or allow location in your browser settings.',
  unavailable:
    "We couldn't find your location. Try again, or drag the map and use Search this area.",
}

const toCoordinates = ({ coords }: GeolocationPosition): LocationCoordinates =>
  devLocationOverride ?? [coords.latitude, coords.longitude]

const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [userLocation, setUserLocation] = useState<LocationCoordinates | null>(devLocationOverride)
  const [searchCentre, setSearchCentre] = useState<LocationCoordinates | null>(
    savedSearchCentre ?? devLocationOverride,
  )
  const [mapFocus, setMapFocus] = useState<MapFocus | null>(null)
  const [isRequestingLocation, setIsRequestingLocation] = useState(false)
  const [locationError, setLocationError] = useState<string | null>(null)

  const showUserLocation = useCallback((position: GeolocationPosition) => {
    const coordinates = toCoordinates(position)
    setUserLocation(coordinates)
    setSearchCentre(coordinates)
    setMapFocus({ position: coordinates })
  }, [])

  useEffect(() => {
    if (!('geolocation' in navigator) || !('permissions' in navigator)) {
      return
    }

    navigator.permissions
      .query({ name: 'geolocation' })
      .then((permissionStatus) => {
        if (permissionStatus.state !== 'granted') {
          return
        }

        navigator.geolocation.getCurrentPosition((position) => {
          if (savedSearchCentre) {
            setUserLocation(toCoordinates(position))
          } else {
            showUserLocation(position)
          }
        })
      })
      .catch((error) => {
        console.warn('Unable to check geolocation permission', error)
      })
  }, [showUserLocation])

  useEffect(() => {
    if (searchCentre) {
      saveSearchCentre(searchCentre)
    }
  }, [searchCentre])

  const requestLocation = () => {
    if (!('geolocation' in navigator)) {
      setLocationError(locationErrors.unsupported)
      return
    }

    if (isRequestingLocation) {
      return
    }

    setLocationError(null)
    setIsRequestingLocation(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        showUserLocation(position)
        setIsRequestingLocation(false)
      },
      (error) => {
        setLocationError(
          error.code === error.PERMISSION_DENIED
            ? locationErrors.denied
            : locationErrors.unavailable,
        )
        setIsRequestingLocation(false)
      },
      { enableHighAccuracy: false, maximumAge: 300000, timeout: 10000 },
    )
  }

  const searchArea = (centre: LocationCoordinates) => {
    setLocationError(null)
    setSearchCentre(centre)
  }

  return (
    <LocationContext
      value={{
        userLocation,
        searchCentre,
        mapFocus,
        isRequestingLocation,
        locationError,
        requestLocation,
        searchArea,
      }}
    >
      {children}
    </LocationContext>
  )
}

export default LocationProvider
