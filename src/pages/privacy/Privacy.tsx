import PrivacySection from '@/components/privacySection/PrivacySection'
import { usePageTitle } from '@/hooks/usePageTitle'
import { pageLayout } from '@/styles/shared.css'

const Privacy = () => {
  usePageTitle('Privacy')

  return (
    <section className={pageLayout}>
      <PrivacySection />
    </section>
  )
}

export default Privacy
