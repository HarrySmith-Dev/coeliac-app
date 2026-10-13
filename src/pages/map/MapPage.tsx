import MapCard from '@/components/mapCard/MapCard'
import { pageLayout, visuallyHidden } from '@/styles/shared.css'
import { usePageTitle } from '@/hooks/usePageTitle'

const MapPage = () => {
  usePageTitle('Gluten-free map')

  return (
    <section className={pageLayout}>
      <h1 className={visuallyHidden}>Gluten-free places map</h1>
      <MapCard fullPage />
    </section>
  )
}

export default MapPage
