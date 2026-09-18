import { useState, useEffect } from 'react'
import InfoCard from '../components/infoCard/InfoCard'
import MapCard, { type MapLocation } from '../components/mapCard/MapCard'
import NearMeButton, { type LocationCoordinates } from '../components/nearMeButton/NearMeButton'
import { pageLayout } from '../styles/shared.css'

const Home = () => {
  const [userLocation, setUserLocation] = useState<MapLocation | null>(null)

  useEffect(() => {
    if (!('geolocation' in navigator) || !('permissions' in navigator)) {
      return
    }

    navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
      if (permissionStatus.state !== 'granted') {
        return
      }

      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setUserLocation([coords.latitude, coords.longitude])
      })
    })
  }, [])

  const handleLocationFound = (location: LocationCoordinates) => {
    setUserLocation(location)
  }

  return (
    <section id="home" className={pageLayout}>
      <InfoCard userLocation={userLocation} onLocationFound={handleLocationFound} />
      <NearMeButton onLocationFound={handleLocationFound} />
      <MapCard userLocation={userLocation} />
    </section>
  )
}

export default Home
