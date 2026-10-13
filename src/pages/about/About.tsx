import FaqSection from '@/components/faqSection/FaqSection'
import InfoCard from '@/components/infoCard/InfoCard'
import OverviewStats from '@/components/overviewStats/OverviewStats'
import { aboutOverviewDescription, aboutOverviewStats, faqs, symptoms } from '@/data/coeliacContent'
import { pageLayout, rowContainer, sectionDivider, visuallyHidden } from '@/styles/shared.css'
import { usePageTitle } from '@/hooks/usePageTitle'

const About = () => {
  usePageTitle('About coeliac disease')

  return (
    <section className={pageLayout}>
      <h1 className={visuallyHidden}>About coeliac disease</h1>
      <div className={rowContainer}>
        <InfoCard variant="plain" description={aboutOverviewDescription}>
          <OverviewStats stats={aboutOverviewStats} />
        </InfoCard>
        <InfoCard title="Common Symptoms" listItems={symptoms} />
      </div>

      <hr className={sectionDivider} />
      <FaqSection id="faq" faqs={faqs} />
    </section>
  )
}

export default About
