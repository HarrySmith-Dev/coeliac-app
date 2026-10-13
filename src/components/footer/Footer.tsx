import { Link } from 'react-router-dom'
import { footer, footerDisclaimer, footerLink, footerLinks } from './Footer.css'

const Footer = () => {
  return (
    <footer className={footer}>
      <nav aria-label="Footer">
        <ul className={footerLinks}>
          <li>
            <Link to="/sources" className={footerLink}>
              Sources
            </Link>
          </li>
          <li>
            <Link to="/privacy" className={footerLink}>
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
