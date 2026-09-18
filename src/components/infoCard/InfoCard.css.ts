import { style } from '@vanilla-extract/css'
import { desktopBreakpoint, tabletBreakpoint } from '../../styles/global.css'

export const infoCardContainer = style({
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [desktopBreakpoint]: {
      flex: 1,
    },
  },
})

export const infoCardContent = style({
  flex: 1,
})

export const infoCardHeader = style({
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 15px',
  color: '#99733E',
  fontFamily: "'Fraunces', serif",

  '@media': {
    [tabletBreakpoint]: {
      fontSize: '20px',
    },
    [desktopBreakpoint]: {
      fontSize: '24px',
    },
  },
})

export const infoCardText = style({
  fontSize: '16px',
  margin: '0 0 15px',
  color: '#2C2C2A',
  fontFamily: "'Inter', sans-serif",

  '@media': {
    [tabletBreakpoint]: {
      fontSize: '18px',
    },
    [desktopBreakpoint]: {
      fontSize: '22px',
    },
  },
})

export const infoCardList = style({
  padding: '0 0 0 20px',
})

export const infoCardListItem = style({
  fontSize: '16px',
  margin: '0 0 15px',
  color: '#2C2C2A',
  fontFamily: "'Inter', sans-serif",

  '::marker': {
    color: '#0F6E56',
    fontSize: '20px',
  },

  '@media': {
    [tabletBreakpoint]: {
      fontSize: '18px',
    },
    [desktopBreakpoint]: {
      fontSize: '22px',
    },
  },
})
