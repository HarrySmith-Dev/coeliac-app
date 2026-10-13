import { Link, NavLink } from 'react-router-dom'
import { SITE_NAME } from '@/constants/site'
import { navLinks } from '@/data/navigation'
import {
  topNavigationContainer,
  topNavigationContentContainer,
  topNavigationItemActive,
  topNavigationLink,
  topNavigationLinkList,
  topNavigationNav,
  topNavigationSubtitle,
  topNavigationTitle,
} from './TopNavigation.css'

const TopNavigation = () => {
  return (
    <header className={topNavigationContainer}>
      <div className={topNavigationContentContainer}>
        <Link to="/" className={topNavigationTitle}>
          {SITE_NAME}
        </Link>
        <p className={topNavigationSubtitle}>Understanding coeliac disease</p>
        <nav aria-label="Main" className={topNavigationNav}>
          <ul className={topNavigationLinkList}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `${topNavigationLink} ${isActive ? topNavigationItemActive : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default TopNavigation
