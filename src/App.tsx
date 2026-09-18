import { useEffect, useState } from 'react'
import BottomNavigation from './components/navigation/bottomNavigation/BottomNavigation'
import TopNavigation from './components/navigation/topNavigation/TopNavigation'
import type { MapLocation } from './components/mapCard/MapCard'
import type { LocationCoordinates } from './components/nearMeButton/NearMeButton'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Map from './pages/Map'

function App() {
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
    <>
      <TopNavigation />
      <Routes>
        <Route
          path="/"
          element={<Home userLocation={userLocation} onLocationFound={handleLocationFound} />}
        />
        <Route
          path="/about"
          element={<About userLocation={userLocation} onLocationFound={handleLocationFound} />}
        />
        <Route path="/map" element={<Map userLocation={userLocation} />} />
      </Routes>
      <BottomNavigation />
    </>
  )
}

export default App
