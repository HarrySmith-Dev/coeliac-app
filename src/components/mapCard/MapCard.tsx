import { useEffect, useRef } from 'react'
import { Circle, CircleMarker, MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { cardContainer } from '../../styles/shared.css'
import { colors } from '../../styles/tokens'
import { useUserLocation, type MapFocus } from '../../location/LocationContext'
import type { LocationCoordinates } from '../../location/types'
import { SEARCH_RADIUS_METRES } from '../../places/overpass'
import { useGlutenFreePlaces } from '../../places/useGlutenFreePlaces'
import {
  mapCardContainer,
  mapCardHeader,
  mapCardLink,
  mapCardMap,
  mapCardMapFullPage,
  mapCardRetry,
  mapCardStatus,
} from './MapCard.css'
import PlaceMarker from './PlaceMarker'
import SearchAreaControl, { MIN_SEARCH_ZOOM } from './SearchAreaControl'

const defaultLocation: LocationCoordinates = [51.505, -0.09]

const nearbyZoom = 14

const searchRadiusLabel = `${SEARCH_RADIUS_METRES / 1000} km`

const MapFocusUpdater = ({ focus }: { focus: MapFocus | null }) => {
  const map = useMap()

  const handledFocus = useRef(focus)

  useEffect(() => {
    if (focus && focus !== handledFocus.current) {
      handledFocus.current = focus
      map.setView(focus.position, Math.max(map.getZoom(), nearbyZoom))
    }
  }, [focus, map])

  return null
}
type MapCardProps = {
  fullPage?: boolean
}

const MapCard = ({ fullPage = false }: MapCardProps) => {
  const { userLocation, searchCentre, mapFocus } = useUserLocation()
  const { data: places, isFetching, isError, refetch } = useGlutenFreePlaces()

  const renderStatus = () => {
    if (!searchCentre) {
      return 'Share your location or search an area of the map'
    }
    if (isFetching) {
      return 'Searching for gluten-free spots...'
    }
    if (isError) {
      return (
        <>
          Couldn't load gluten-free spots.{' '}
          <button type="button" className={mapCardRetry} onClick={() => refetch()}>
            Try again
          </button>
        </>
      )
    }
    if (places?.length === 0) {
      return `No gluten-free spots found within ${searchRadiusLabel}`
    }
    return `${places?.length} gluten-free spot${places?.length === 1 ? '' : 's'} within ${searchRadiusLabel}`
  }

  return (
    <article className={`${cardContainer} ${mapCardContainer}`}>
      <div className={mapCardHeader}>
        <p className={mapCardStatus} aria-live="polite">
          {renderStatus()}
        </p>
        {!fullPage && (
          <Link to="/map" className={mapCardLink}>
            View full map
          </Link>
        )}
      </div>
      <MapContainer
        className={fullPage ? mapCardMapFullPage : mapCardMap}
        center={searchCentre ?? defaultLocation}
        zoom={searchCentre ? nearbyZoom : MIN_SEARCH_ZOOM}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapFocusUpdater focus={mapFocus} />
        <SearchAreaControl />
        {searchCentre && (
          <Circle
            center={searchCentre}
            radius={SEARCH_RADIUS_METRES}
            interactive={false}
            pathOptions={{ color: colors.primary, weight: 1, fillOpacity: 0.05 }}
          />
        )}
        {places?.map((place) => (
          <PlaceMarker key={place.id} place={place} />
        ))}
        {userLocation && <CircleMarker center={userLocation} radius={8} />}
      </MapContainer>
    </article>
  )
}

export default MapCard
