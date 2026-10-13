import SourcesSection from '@/components/sourcesSection/SourcesSection'
import { usePageTitle } from '@/hooks/usePageTitle'
import { pageLayout } from '@/styles/shared.css'

const Sources = () => {
  usePageTitle('Sources')

  return (
    <section className={pageLayout}>
      <SourcesSection />
    </section>
  )
}

export default Sources
