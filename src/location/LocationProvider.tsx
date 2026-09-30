import { useEffect, useState, type ReactNode } from 'react'
import { LocationContext } from './LocationContext'
import type { LocationCoordinates } from './types'

const toCoordinates = ({ coords }: GeolocationPosition): LocationCoordinates => [
  coords.latitude,
  coords.longitude,
]

const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [userLocation, setUserLocation] = useState<LocationCoordinates | null>(null)
  const [isRequestingLocation, setIsRequestingLocation] = useState(false)

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
          setUserLocation(toCoordinates(position))
        })
      })
      .catch((error) => {
        console.warn('Unable to check geolocation permission', error)
      })
  }, [])

  const requestLocation = () => {
    if (!('geolocation' in navigator) || isRequestingLocation) {
      return
    }

    setIsRequestingLocation(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation(toCoordinates(position))
        setIsRequestingLocation(false)
      },
      () => {
        setIsRequestingLocation(false)
      },
      { enableHighAccuracy: false, maximumAge: 300000, timeout: 10000 },
    )
  }

  return (
    <LocationContext value={{ userLocation, isRequestingLocation, requestLocation }}>
      {children}
    </LocationContext>
  )
}

export default LocationProvider
