import {
  bottomNavigationContainer,
  bottomNavigationItemActive,
  bottomNavigationItemLink,
  bottomNavigationItemIcon,
  bottomNavigationList,
} from './BottomNavigation.css'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../../data/navigation'

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
                `${bottomNavigationItemLink} ${isActive ? bottomNavigationItemActive : ''}`
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
