import { style, styleVariants } from '@vanilla-extract/css'
import { desktopBreakpoint } from '@/styles/global.css'
import { bodyText, headingText } from '@/styles/shared.css'
import { colors } from '@/styles/tokens'

export const infoCardContainer = style({
  '@media': {
    [desktopBreakpoint]: {
      flex: 1,
    },
  },
})

export const infoCardVariant = styleVariants({
  outlined: {
    backgroundColor: colors.surface,
    border: `1px solid ${colors.border}`,
  },
  plain: {
    backgroundColor: 'transparent',
    border: 'none',
  },
})

export const infoCardHeader = style([
  headingText,
  {
    color: colors.gold,
    margin: '0 0 15px',
  },
])

export const infoCardText = style([
  bodyText,
  {
    margin: '0 0 15px',
  },
])

export const infoCardList = style({
  padding: '0 0 0 20px',
})

export const infoCardListItem = style([
  bodyText,
  {
    margin: '0 0 15px',

    '::marker': {
      color: colors.primary,
      fontSize: '20px',
    },
  },
])
