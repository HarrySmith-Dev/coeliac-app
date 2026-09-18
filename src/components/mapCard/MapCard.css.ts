import { style } from '@vanilla-extract/css'
import { desktopBreakpoint } from '../../styles/global.css'

export const mapCardLink = style({
  color: '#0F6E56',
  textDecoration: 'none',
  fontFamily: "'Inter', serif",
  fontSize: '14px',
  marginBottom: '15px',
})

export const mapCardContainer = style({
  minWidth: 0,

  '@media': {
    [desktopBreakpoint]: {
      flex: 1,
    },
  },
})

export const mapCardMap = style({
  width: '100%',
  height: '400px',
  borderRadius: '10px',
  overflow: 'hidden',
})
