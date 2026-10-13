import LazyMapCard from '@/components/mapCard/LazyMapCard'
import { pageLayout, visuallyHidden } from '@/styles/shared.css'
import { usePageTitle } from '@/hooks/usePageTitle'

const MapPage = () => {
  usePageTitle('Gluten-free map')

  return (
    <section className={pageLayout}>
      <h1 className={visuallyHidden}>Gluten-free places map</h1>
      <LazyMapCard fullPage />
    </section>
  )
}

export default MapPage
