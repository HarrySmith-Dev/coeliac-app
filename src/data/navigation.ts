import aboutIcon from '../assets/aboutIcon.svg'
import homeIcon from '../assets/homeIcon.svg'
import mapIcon from '../assets/mapIcon.svg'

type NavLinkData = {
  label: string
  path: string
  icon: string
}

export const navLinks: NavLinkData[] = [
  { label: 'Home', path: '/', icon: homeIcon },
  { label: 'About', path: '/about', icon: aboutIcon },
  { label: 'Map', path: '/map', icon: mapIcon },
]
