import { contentLastReviewed } from '@/data/coeliacContent'
import { sources } from '@/data/sources'
import { pageHeading, sectionText } from '@/styles/shared.css'
import {
  sourcesSectionItem,
  sourcesSectionLink,
  sourcesSectionList,
  sourcesSectionReviewed,
} from './SourcesSection.css'
import ExternalLink from '@/components/externalLink/ExternalLink'

const SourcesSection = () => {
  return (
    <section id="sources">
      <h1 className={pageHeading}>Sources</h1>
      <p className={sectionText}>
        The information on this site is general guidance, not medical advice. If you think you might
        have coeliac disease, or have questions about your diet, speak to your GP or a dietitian.
      </p>
      <ul className={sourcesSectionList}>
        {Object.values(sources).map((source) => (
          <li key={source.url} className={sourcesSectionItem}>
            <ExternalLink href={source.url} className={sourcesSectionLink}>
              {source.publisher}: {source.title}
            </ExternalLink>
          </li>
        ))}
      </ul>
      <p className={sourcesSectionReviewed}>Last reviewed: {contentLastReviewed}</p>
    </section>
  )
}

export default SourcesSection
