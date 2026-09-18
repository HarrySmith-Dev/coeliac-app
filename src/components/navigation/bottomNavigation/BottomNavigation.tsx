import {
  bottomNavigationContainer,
  bottomNavigationItemActive,
  bottomNavigationItemLink,
  bottomNavigationItemIcon,
  bottomNavigationList,
} from './BottomNavigation.css'
import { NavLink } from 'react-router-dom'
import aboutIcon from '../../../assets/aboutIcon.svg'
import homeIcon from '../../../assets/homeIcon.svg'
import mapIcon from '../../../assets/mapIcon.svg'

type NavLinkProps = {
  label: string
  path: string
  icon: string
}

const navLinks: NavLinkProps[] = [
  {
    label: 'Home',
    path: '/',
    icon: homeIcon,
  },
  {
    label: 'About',
    path: '/about',
    icon: aboutIcon,
  },
  {
    label: 'Map',
    path: '/map',
    icon: mapIcon,
  },
]

const BottomNavigation = () => {
  return (
    <div className={bottomNavigationContainer}>
      <ul className={bottomNavigationList}>
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `${bottomNavigationItemLink} ${isActive && bottomNavigationItemActive}`
              }
            >
              <span
                aria-hidden="true"
                className={bottomNavigationItemIcon}
                style={{ maskImage: `url("${link.icon}")` }}
              />
              <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BottomNavigation
