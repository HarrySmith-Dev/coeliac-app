import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { LocationContext, type MapFocus } from './LocationContext'
import { loadSearchCentre, saveSearchCentre } from './searchCentreStorage'
import type { LocationCoordinates } from './types'

const devLocationOverride: LocationCoordinates | null = import.meta.env.DEV ? [51.505, -0.09] : null

const savedSearchCentre = loadSearchCentre()

const toCoordinates = ({ coords }: GeolocationPosition): LocationCoordinates =>
  devLocationOverride ?? [coords.latitude, coords.longitude]

const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [userLocation, setUserLocation] = useState<LocationCoordinates | null>(devLocationOverride)
  const [searchCentre, setSearchCentre] = useState<LocationCoordinates | null>(
    savedSearchCentre ?? devLocationOverride,
  )
  const [mapFocus, setMapFocus] = useState<MapFocus | null>(null)
  const [isRequestingLocation, setIsRequestingLocation] = useState(false)

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
    if (!('geolocation' in navigator) || isRequestingLocation) {
      return
    }

    setIsRequestingLocation(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        showUserLocation(position)
        setIsRequestingLocation(false)
      },
      () => {
        setIsRequestingLocation(false)
      },
      { enableHighAccuracy: false, maximumAge: 300000, timeout: 10000 },
    )
  }

  return (
    <LocationContext
      value={{
        userLocation,
        searchCentre,
        mapFocus,
        isRequestingLocation,
        requestLocation,
        searchArea: setSearchCentre,
      }}
    >
      {children}
    </LocationContext>
  )
}

export default LocationProvider
