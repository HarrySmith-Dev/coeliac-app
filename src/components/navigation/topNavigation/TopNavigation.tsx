import {
  topNavigationContainer,
  topNavigationContentContainer,
  topNavigationLink,
  topNavigationLinkList,
  topNavigationSubtitle,
  topNavigationTitle,
} from './TopNavigation.css'

type NavLink = {
  label: string
  path: string
}

const navLinks: NavLink[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Map',
    path: '/map',
  },
]

const TopNavigation = () => {
  return (
    <header className={topNavigationContainer}>
      <nav className={topNavigationContentContainer}>
        <h1 className={topNavigationTitle}>Gluten Free & Me</h1>
        <p className={topNavigationSubtitle}>Understanding coeliac disease</p>
        <ul className={topNavigationLinkList}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <a href={link.path} className={topNavigationLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default TopNavigation
