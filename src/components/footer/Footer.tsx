import { Link } from 'react-router-dom'
import { footer, footerDisclaimer, footerLinks } from './Footer.css'
import { smallActionLink } from '@/styles/shared.css'

const Footer = () => {
  return (
    <footer className={footer}>
      <nav aria-label="Footer">
        <ul className={footerLinks}>
          <li>
            <Link to="/sources" className={smallActionLink}>
              Sources
            </Link>
          </li>
          <li>
            <Link to="/privacy" className={smallActionLink}>
              Privacy
            </Link>
          </li>
        </ul>
      </nav>
      <p className={footerDisclaimer}>
        General information about coeliac disease, not medical advice. Speak to your GP or a
        dietitian about your health.
      </p>
    </footer>
  )
}

export default Footer
