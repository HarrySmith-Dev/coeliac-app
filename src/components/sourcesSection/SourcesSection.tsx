import { contentLastReviewed } from '@/data/coeliacContent'
import { sources } from '@/data/sources'
import {
  sourcesSectionHeading,
  sourcesSectionItem,
  sourcesSectionLink,
  sourcesSectionList,
  sourcesSectionReviewed,
  sourcesSectionText,
} from './SourcesSection.css'

const SourcesSection = () => {
  return (
    <section id="sources">
      <h2 className={sourcesSectionHeading}>Sources</h2>
      <p className={sourcesSectionText}>
        The information on this site is general guidance, not medical advice. If you think you might
        have coeliac disease, or have questions about your diet, speak to your GP or a dietitian.
      </p>
      <ul className={sourcesSectionList}>
        {Object.values(sources).map((source) => (
          <li key={source.url} className={sourcesSectionItem}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className={sourcesSectionLink}
            >
              {source.publisher}: {source.title}
            </a>
          </li>
        ))}
      </ul>
      <p className={sourcesSectionReviewed}>Last reviewed: {contentLastReviewed}</p>
    </section>
  )
}

export default SourcesSection
