import { globalStyle } from '@vanilla-extract/css'
import { colors } from './tokens'

globalStyle('html, body, #root', {
  height: '100%',
  scrollBehavior: 'smooth',
})

globalStyle('body', {
  margin: 0,
  padding: 0,
  backgroundColor: colors.pageBackground,
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

export const mobileBreakpoint = `screen and (min-width: 600px)`
export const tabletBreakpoint = `screen and (min-width: 768px)`
export const desktopBreakpoint = `screen and (min-width: 1024px)`
