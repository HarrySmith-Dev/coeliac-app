import { style } from '@vanilla-extract/css'
import { tabletBreakpoint } from '../../../styles/global.css'

export const bottomNavigationContainer = style({
  backgroundColor: '#FFFFFF',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  borderTop: '1px solid #CFCBB8',
  padding: '10px',
  zIndex: 1000,

  '@media': {
    [tabletBreakpoint]: {
      display: 'none',
    },
  },
})

export const bottomNavigationList = style({
  display: 'flex',
  justifyContent: 'space-around',
  padding: 0,
  margin: 0,
  listStyle: 'none',
})

export const bottomNavigationItemLink = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  color: '#2C2C2A',
  fontFamily: "'Inter', sans-serif",
})

export const bottomNavigationItemActive = style({
  color: '#2F6F55',
})

export const bottomNavigationItemIcon = style({
  width: '24px',
  height: '24px',
  marginBottom: '5px',
  display: 'block',
  backgroundColor: 'currentColor',
  maskRepeat: 'no-repeat',
  maskPosition: 'center',
  maskSize: 'contain',
})
