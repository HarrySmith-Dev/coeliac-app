import { useEffect } from 'react'
import { CircleMarker, MapContainer, TileLayer, useMap } from 'react-leaflet'
import { cardContainer } from '../../styles/shared.css'
import { useUserLocation } from '../../location/LocationContext'
import type { LocationCoordinates } from '../../location/types'
import { mapCardContainer, mapCardLink, mapCardMap } from './MapCard.css'

const defaultLocation: LocationCoordinates = [51.505, -0.09]

const MapLocationUpdater = ({ location }: { location: LocationCoordinates | null }) => {
  const map = useMap()

  useEffect(() => {
    if (location) {
      map.setView(location, map.getZoom())
    }
  }, [location, map])

  return null
}

const MapCard = () => {
  const { userLocation } = useUserLocation()

  return (
    <article className={`${cardContainer} ${mapCardContainer}`}>
      <a
        href="https://www.openstreetmap.org/"
        target="_blank"
        rel="noopener noreferrer"
        className={mapCardLink}
      >
        View full map
      </a>
      <MapContainer className={mapCardMap} center={userLocation ?? defaultLocation} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapLocationUpdater location={userLocation} />
        {userLocation && <CircleMarker center={userLocation} radius={8} />}
      </MapContainer>
    </article>
  )
}

export default MapCard
