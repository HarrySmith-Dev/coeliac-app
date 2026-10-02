import FaqSection from '@/components/faqSection/FaqSection'
import InfoCard from '@/components/infoCard/InfoCard'
import SourcesSection from '@/components/sourcesSection/SourcesSection'
import OverviewStats from '@/components/overviewStats/OverviewStats'
import { aboutOverviewDescription, aboutOverviewStats, faqs, symptoms } from '@/data/coeliacContent'
import { pageLayout, rowContainer, sectionDivider } from '@/styles/shared.css'

const About = () => {
  return (
    <section className={pageLayout}>
      <div className={rowContainer}>
        <InfoCard variant="plain" description={aboutOverviewDescription}>
          <OverviewStats stats={aboutOverviewStats} />
        </InfoCard>
        <InfoCard title="Common Symptoms" listItems={symptoms} />
      </div>

      <hr className={sectionDivider} />
      <FaqSection id="faq" faqs={faqs} />

      <hr className={sectionDivider} />
      <SourcesSection />
    </section>
  )
}

export default About
