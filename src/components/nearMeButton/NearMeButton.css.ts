import { style } from '@vanilla-extract/css'
import { desktopBreakpoint } from '@/styles/global.css'
import { primaryButton } from '@/styles/shared.css'

export const nearMeButtonContainer = style([
  primaryButton,
  {
    '@media': {
      [desktopBreakpoint]: {
        display: 'none',
      },
    },
  },
])

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
