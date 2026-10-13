import ExternalLink from '@/components/externalLink/ExternalLink'
import { CONTACT_EMAIL, SITE_OWNER } from '@/constants/site'
import { privacyLinks, privacyPoints } from '@/data/privacy'
import { inlineLink, pageHeading, sectionText } from '@/styles/shared.css'
import { privacySectionLinks, privacySectionPointTitle } from './PrivacySection.css'

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
      <h2 className={privacySectionPointTitle}>Contact</h2>
      <p className={sectionText}>
        This site is run by {SITE_OWNER}. If you have a question about this notice or your data,
        email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className={inlineLink}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>
      <p className={privacySectionLinks}>
        More information:{' '}
        {privacyLinks.map((link, index) => (
          <span key={link.url}>
            {index > 0 && ', '}
            <ExternalLink href={link.url} className={inlineLink}>
              {link.publisher}: {link.title}
            </ExternalLink>
          </span>
        ))}
      </p>
    </section>
  )
}

export default PrivacySection
