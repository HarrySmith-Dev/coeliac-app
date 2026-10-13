import { Link } from 'react-router-dom'
import type { Faq } from '@/types/content'
import FaqAccordion from '@/components/faqAccordion/FaqAccordion'
import { sectionHeading } from '@/styles/shared.css'
import { faqSection, faqSectionLink } from './FaqSection.css'

type FaqSectionProps = {
  faqs: Faq[]
  id?: string
  showAllLink?: boolean
}

const FaqSection = ({ faqs, id, showAllLink = false }: FaqSectionProps) => {
  return (
    <section id={id} className={faqSection}>
      <h2 className={sectionHeading}>Frequently asked questions</h2>
      {faqs.map((faq) => (
        <FaqAccordion
          key={faq.id}
          title={faq.title}
          description={faq.description}
          sources={faq.sources}
        />
      ))}
      {showAllLink && (
        <Link to="/about#faq" className={faqSectionLink}>
          See all questions
        </Link>
      )}
    </section>
  )
}

export default FaqSection
