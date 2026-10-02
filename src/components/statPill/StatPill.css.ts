import { createVar, style, styleVariants } from '@vanilla-extract/css'
import { desktopBreakpoint } from '../../styles/global.css'
import { colors, fonts } from '../../styles/tokens'

const headingColor = createVar()

export const statPillContainer = style({
  borderRadius: '15px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  fontFamily: fonts.body,

  '@media': {
    [desktopBreakpoint]: {
      maxWidth: '200px',
    },
  },
})

export const statPillTone = styleVariants(
  { green: colors.green, amber: colors.amber },
  ({ background, heading, text }) => ({
    backgroundColor: background,
    color: text,
    vars: { [headingColor]: heading },
  }),
)

export const statPillHeader = style({
  color: headingColor,
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 2px',
})

export const statPillText = style({
  fontSize: '12px',
  margin: '0',
})

export const statPillSource = style({
  color: 'inherit',
  fontSize: '11px',
  margin: '4px 0 0',
  opacity: 0.8,
  textDecoration: 'underline',
})
