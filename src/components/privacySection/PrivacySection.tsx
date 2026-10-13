import ExternalLink from '@/components/externalLink/ExternalLink'
import { privacyLinks, privacyPoints } from '@/data/privacy'
import { pageHeading, sectionText } from '@/styles/shared.css'
import {
  privacySectionLink,
  privacySectionLinks,
  privacySectionPointTitle,
} from './PrivacySection.css'

const PrivacySection = () => {
  return (
    <section id="privacy">
      <h1 className={pageHeading}>Privacy</h1>
      {privacyPoints.map((point) => (
        <div key={point.id}>
          <h2 className={privacySectionPointTitle}>{point.title}</h2>
          <p className={sectionText}>{point.description}</p>
        </div>
      ))}
      <p className={privacySectionLinks}>
        More information:{' '}
        {privacyLinks.map((link, index) => (
          <span key={link.url}>
            {index > 0 && ', '}
            <ExternalLink href={link.url} className={privacySectionLink}>
              {link.publisher}: {link.title}
            </ExternalLink>
          </span>
        ))}
      </p>
    </section>
  )
}

export default PrivacySection
