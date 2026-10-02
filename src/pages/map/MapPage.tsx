import MapCard from '@/components/mapCard/MapCard'
import { pageLayout } from '@/styles/shared.css'
import { usePageTitle } from '@/hooks/usePageTitle'

const MapPage = () => {
  usePageTitle('Gluten-free map')

  return (
    <section className={pageLayout}>
      <MapCard fullPage />
    </section>
  )
}

export default MapPage
