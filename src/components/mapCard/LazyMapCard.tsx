import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { cardContainer } from '@/styles/shared.css'
import type { MapCardProps } from './MapCard'
import {
  mapCardActions,
  mapCardContainer,
  mapCardHeader,
  mapCardLink,
  mapCardMap,
  mapCardMapFullPage,
  mapCardMapPlaceholder,
  mapCardStatus,
} from './MapCard.css'

const MapCard = lazy(() => import('./MapCard'))

const MapCardPlaceholder = ({ fullPage = false }: MapCardProps) => {
  return (
    <article className={`${cardContainer} ${mapCardContainer}`}>
      <div className={mapCardHeader}>
        <p className={mapCardStatus} aria-live="polite">
          Loading map...
        </p>
        <div className={mapCardActions}>
          {!fullPage && (
            <Link to="/map" className={mapCardLink}>
              View full map
            </Link>
          )}
        </div>
      </div>
      <div
        className={`${fullPage ? mapCardMapFullPage : mapCardMap} ${mapCardMapPlaceholder}`}
        aria-hidden="true"
      />
    </article>
  )
}

const LazyMapCard = (props: MapCardProps) => {
  return (
    <Suspense fallback={<MapCardPlaceholder {...props} />}>
      <MapCard {...props} />
    </Suspense>
  )
}

export default LazyMapCard
