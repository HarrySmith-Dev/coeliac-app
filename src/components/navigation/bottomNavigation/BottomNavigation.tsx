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

type NavLink = {
  label: string
  path: string
  icon: string
}

const navLinks: NavLink[] = [
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
              <img src={link.icon} alt={link.label} className={bottomNavigationItemIcon} />
              <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BottomNavigation
