import MapCard from '@/components/mapCard/MapCard'
import { pageLayout } from '@/styles/shared.css'

const MapPage = () => {
  return (
    <section className={pageLayout}>
      <MapCard fullPage />
    </section>
  )
}

export default MapPage
