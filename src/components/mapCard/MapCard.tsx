import type { CircleMarker as LeafletCircleMarker, Map as LeafletMap } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useId, useRef, useState } from 'react'
import { Circle, CircleMarker, MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { cardContainer, smallActionLink, smallMutedText } from '@/styles/shared.css'
import { colors } from '@/styles/tokens'
import type { MapFocus } from '@/context/LocationContext'
import { useUserLocation } from '@/hooks/useUserLocation'
import {
  DEFAULT_LOCATION,
  MAP_BOUNDS,
  MAP_MAX_ZOOM,
  MAP_MIN_ZOOM,
  MIN_SEARCH_ZOOM,
  NEARBY_ZOOM,
  SEARCH_RADIUS_METRES,
  TILE_KEEP_BUFFER,
} from '@/constants/map'
import { PLACES_SLOW_SEARCH_DELAY } from '@/constants/places'
import { useGlutenFreePlaces } from '@/hooks/useGlutenFreePlaces'
import { useIsSlow } from '@/hooks/useIsSlow'
import {
  mapCardContainer,
  mapCardHeader,
  mapCardActions,
  mapCardMap,
  mapCardMapArea,
  mapCardMapFullPage,
  mapCardRetry,
} from './MapCard.css'
import MapDataNotice from './MapDataNotice'
import { getMapStatus } from './mapStatus'
import PlaceList from './PlaceList'
import PlaceMarker from './PlaceMarker'
import SearchAreaControl from './SearchAreaControl'

const MapFocusUpdater = ({ focus }: { focus: MapFocus | null }) => {
  const map = useMap()

  const handledFocus = useRef(focus)

  useEffect(() => {
    if (focus && focus !== handledFocus.current) {
      handledFocus.current = focus
      map.setView(focus.position, Math.max(map.getZoom(), NEARBY_ZOOM))
    }
  }, [focus, map])

  return null
}

export type MapCardProps = {
  fullPage?: boolean
}

const MapCard = ({ fullPage = false }: MapCardProps) => {
  const { userLocation, searchCentre, mapFocus, locationError } = useUserLocation()
  const { data: places, error, failureCount, isFetching, refetch } = useGlutenFreePlaces()
  const isSlowSearch = useIsSlow(isFetching, PLACES_SLOW_SEARCH_DELAY)
  const [map, setMap] = useState<LeafletMap | null>(null)
  const markers = useRef(new Map<string, LeafletCircleMarker>())
  const [isListOpen, setIsListOpen] = useState(false)
  const listId = useId()
  const hasPlaces = Boolean(searchCentre && places && places.length > 0)

  const showPlaceOnMap = (placeId: string) => {
    setIsListOpen(false)
    map?.getContainer().scrollIntoView({ block: 'nearest' })
    map?.getContainer().focus()
    markers.current.get(placeId)?.openPopup()
  }

  const status = getMapStatus({
    locationError,
    hasSearchCentre: Boolean(searchCentre),
    isFetching,
    failureCount,
    isSlowSearch,
    error,
    placeCount: places?.length,
  })

  return (
    <article className={`${cardContainer} ${mapCardContainer}`}>
      <div className={mapCardHeader}>
        <p className={smallMutedText} aria-live="polite">
          {status.message}
          {status.canRetry && (
            <>
              {' '}
              <button type="button" className={mapCardRetry} onClick={() => refetch()}>
                Try again
              </button>
            </>
          )}
        </p>
        <div className={mapCardActions}>
          {hasPlaces && (
            <button
              type="button"
              className={smallActionLink}
              aria-expanded={isListOpen}
              aria-controls={listId}
              onClick={() => setIsListOpen((isOpen) => !isOpen)}
            >
              {isListOpen ? 'Map view' : 'List view'}
            </button>
          )}
          {!fullPage && (
            <Link to="/map" className={smallActionLink}>
              View full map
            </Link>
          )}
        </div>
      </div>
      <div className={mapCardMapArea}>
        <MapContainer
          ref={setMap}
          className={fullPage ? mapCardMapFullPage : mapCardMap}
          center={searchCentre ?? DEFAULT_LOCATION}
          zoom={searchCentre ? NEARBY_ZOOM : MIN_SEARCH_ZOOM}
          minZoom={MAP_MIN_ZOOM}
          maxZoom={MAP_MAX_ZOOM}
          maxBounds={MAP_BOUNDS}
          maxBoundsViscosity={1}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            keepBuffer={TILE_KEEP_BUFFER}
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
            <PlaceMarker
              key={place.id}
              place={place}
              ref={(marker) => {
                if (marker) {
                  markers.current.set(place.id, marker)
                }
                return () => {
                  markers.current.delete(place.id)
                }
              }}
            />
          ))}
          {userLocation && <CircleMarker center={userLocation} radius={8} />}
        </MapContainer>
        {isListOpen && hasPlaces && searchCentre && places && (
          <PlaceList
            id={listId}
            places={places}
            searchCentre={searchCentre}
            onShowOnMap={showPlaceOnMap}
          />
        )}
      </div>
      <MapDataNotice />
    </article>
  )
}

export default MapCard
