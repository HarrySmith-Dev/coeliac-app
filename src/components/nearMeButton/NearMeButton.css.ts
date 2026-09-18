import { style } from '@vanilla-extract/css'
import { desktopBreakpoint } from '../../styles/global.css'

export const nearMeButtonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px',
  backgroundColor: '#D85A30',
  border: 'none',
  borderRadius: '15px',
  color: '#FFFFFF',
  fontSize: '18px',
  fontFamily: "'Fraunces', sans-serif",
  cursor: 'pointer',
  gap: '10px',

  ':hover': {
    backgroundColor: '#C14D2A',
  },

  '@media': {
    [desktopBreakpoint]: {
      display: 'none',
    },
  },
})

export const nearMeButtonIcon = style({
  width: '20px',
  height: '20px',
  filter: 'brightness(0) invert(1)',
})

export const nearMeButtonDesktop = style({
  display: 'none',

  '@media': {
    [desktopBreakpoint]: {
      display: 'flex',
      margin: '0 0 15px',
    },
  },
})
