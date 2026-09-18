import { style } from '@vanilla-extract/css'
import { desktopBreakpoint, tabletBreakpoint } from './global.css'

export const pageLayout = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '40px 20px 100px',

  '@media': {
    [tabletBreakpoint]: {
      padding: '40px 40px 100px',
    },
    [desktopBreakpoint]: {
      padding: '40px 80px 100px',
      flexDirection: 'row',
      flex: 1,
    },
  },
})

export const cardContainer = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '15px',
  border: '1px solid #CFCBB8',
  padding: '15px',
})

export const cardContent = style({
  display: 'flex',
  flexDirection: 'column',
})
