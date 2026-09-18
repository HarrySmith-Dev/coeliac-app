import { style } from '@vanilla-extract/css'
import { desktopBreakpoint } from '../../../styles/global.css'

export const topNavigationContainer = style({
  backgroundColor: '#0F6E56',
  padding: '18px',

  '@media': {
    [desktopBreakpoint]: {
      padding: '30px',
    },
  },
})

export const topNavigationContentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@media': {
    [desktopBreakpoint]: {
      flexDirection: 'row',
      gap: '150px',
      boxSizing: 'border-box',
    },
  },
})

export const topNavigationTitle = style({
  color: '#FFFFFF',
  fontFamily: "'Fraunces', serif",
  fontSize: '20px',
  fontWeight: '500',
  margin: '0 0 10px',

  '@media': {
    [desktopBreakpoint]: {
      fontSize: '24px',
      margin: '0 0 0 60px',
    },
  },
})

export const topNavigationSubtitle = style({
  color: '#E1F5EE',
  fontSize: '16px',
  margin: '0',
  fontFamily: "'Inter', sans-serif",

  '@media': {
    [desktopBreakpoint]: {
      display: 'none',
    },
  },
})

export const topNavigationLinkList = style({
  display: 'none',

  '@media': {
    [desktopBreakpoint]: {
      listStyle: 'none',
      display: 'flex',
      gap: '60px',
      padding: '0',
      margin: '0',
    },
  },
})

export const topNavigationLink = style({
  color: '#FFFFFF',
  textDecoration: 'none',
  fontFamily: "'Inter', sans-serif",
  fontSize: '16px',

  ':hover': {
    color: '#D85A30',
  },

  '@media': {
    [desktopBreakpoint]: {
      fontSize: '18px',
    },
  },
})

export const topNavigationItemActive = style({
  color: '#D85A30',
})
