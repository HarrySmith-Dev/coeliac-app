import { style } from '@vanilla-extract/css'
import { desktopBreakpoint } from '../../styles/global.css'

export const statPillContainer = style({
  borderRadius: '15px',
  border: '1px solid #CFCBB8',
  padding: '8px',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  '@media': {
    [desktopBreakpoint]: {
      maxWidth: '200px',
    },
  },
})

export const statPillHeader = style({
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 2px',
  fontFamily: "'Inter', serif",
})

export const statPillText = style({
  fontSize: '12px',
  margin: '0',
  fontFamily: "'Inter', serif",
})
