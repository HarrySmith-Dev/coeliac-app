import { globalStyle } from '@vanilla-extract/css'
import { colors } from './tokens'

globalStyle('html, body', {
  height: '100%',
})

globalStyle('#root', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
})

globalStyle('html', {
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      scrollBehavior: 'smooth',
    },
  },
})

globalStyle('body', {
  margin: 0,
  padding: '0 env(safe-area-inset-right) 0 env(safe-area-inset-left)',
  backgroundColor: colors.pageBackground,
})

globalStyle(':focus-visible', {
  outline: `2px solid ${colors.primary}`,
  outlineOffset: '2px',
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

export const tabletBreakpoint = `screen and (min-width: 768px)`
export const desktopBreakpoint = `screen and (min-width: 1024px)`
