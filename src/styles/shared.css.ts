import { style } from '@vanilla-extract/css'
import { desktopBreakpoint, tabletBreakpoint } from './global.css'

export const pageLayout = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 20px 100px',

  '@media': {
    [tabletBreakpoint]: {
      padding: '40px 40px 100px',
    },

    [desktopBreakpoint]: {
      padding: '40px 80px 100px',
      flexDirection: 'row',
    },
  },
})

export const cardContainer = style({
  borderRadius: '15px',
  padding: '15px',
})

export const cardStatPillContainer = style({
  display: 'flex',
  gap: '10px',
  margin: '0 0 40px',
})
