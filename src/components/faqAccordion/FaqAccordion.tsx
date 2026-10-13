import { useId, useState } from 'react'
import chevron from '@/assets/chevron.svg'
import type { Source } from '@/types/content'
import {
  faqAccordionChevronClosed,
  faqAccordionContainer,
  faqAccordionChevron,
  faqAccordionCardText,
  faqAccordionHeader,
  faqAccordionCardHeading,
  faqAccordionSources,
} from './FaqAccordion.css'
import ExternalLink from '@/components/externalLink/ExternalLink'
import { inlineLink } from '@/styles/shared.css'

type FaqAccordionProps = {
  title: string
  description?: string
  sources?: Source[]
}

const FaqAccordion = ({ title, description, sources }: FaqAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentId = useId()

  const toggleAccordion = () => setIsOpen((isOpen) => !isOpen)

  return (
    <div className={faqAccordionContainer}>
      <h3 className={faqAccordionCardHeading}>
        <button
          type="button"
          className={faqAccordionHeader}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={toggleAccordion}
        >
          {title}
          <img
            className={isOpen ? faqAccordionChevron : faqAccordionChevronClosed}
            src={chevron}
            alt=""
            aria-hidden="true"
          />
        </button>
      </h3>
      <div id={contentId} hidden={!isOpen}>
        {description && <p className={faqAccordionCardText}>{description}</p>}
        {sources && sources.length > 0 && (
          <p className={faqAccordionSources}>
            Sources:{' '}
            {sources.map((source, index) => (
              <span key={source.url}>
                {index > 0 && ', '}
                <ExternalLink href={source.url} className={inlineLink}>
                  {source.publisher}: {source.title}
                </ExternalLink>
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  )
}

export default FaqAccordion
