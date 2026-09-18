import { useEffect } from 'react'
import { CircleMarker, MapContainer, TileLayer, useMap } from 'react-leaflet'
import { cardContainer, cardContent } from '../../styles/shared.css'
import { mapCardContainer, mapCardLink, mapCardMap } from './MapCard.css'

export type MapLocation = [number, number]

type MapCardProps = {
  userLocation?: MapLocation | null
}

const defaultLocation: MapLocation = [51.505, -0.09]

const MapLocationUpdater = ({ location }: { location: MapLocation | null }) => {
  const map = useMap()

  useEffect(() => {
    if (location) {
      map.setView(location, map.getZoom())
    }
  }, [location, map])

  return null
}

const MapCard = ({ userLocation }: MapCardProps) => {
  return (
    <article className={`${cardContainer} ${mapCardContainer}`}>
      <div className={cardContent}>
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
          <MapLocationUpdater location={userLocation ?? null} />
          {userLocation && <CircleMarker center={userLocation} radius={8} />}
        </MapContainer>
      </div>
    </article>
  )
}

export default MapCard
