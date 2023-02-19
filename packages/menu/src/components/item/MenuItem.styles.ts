import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'
import { FONT_SIZE, GRID_SIZE } from '@pisagor/core/constants'

export const root = css({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  minHeight: GRID_SIZE * 5,
  margin: 0,
  padding: `${GRID_SIZE}px ${GRID_SIZE * 2.5}px`,
  alignItems: 'center',
  border: 0,
  fontSize: FONT_SIZE,
  outline: 0,
  textDecoration: 'none',
  userSelect: 'none',
  color: 'currentColor',
  backgroundColor: 'transparent',

  '::-moz-focus-inner': {
    border: 0,
  },

  ':hover': {
    textDecoration: 'none',
    backgroundColor: token('background.status.neutral.hover'),
  },
})

// const unselectedStyles = css({
//   backgroundColor: 'transparent',
//   color: 'currentColor',
//   ':visited': {
//     color: 'currentColor',
//   },
//   ':hover': {
//     backgroundColor: tokenfn('color.background.status.neutral.subtle:hover', N20),
//     color: 'currentColor',
//   },
//   ':active': {
//     backgroundColor: tokenfn('color.background.status.neutral.subtle:active', N30),
//     boxShadow: 'none',
//     color: 'currentColor',
//   },
// });

// const disabledStyles = css({
//   cursor: 'not-allowed',
//   '&, :hover, :active': {
//     backgroundColor: 'transparent',
//     color: tokenfn('color.text.disabled', N200),
//   },
// });

// const selectedStyles = css({
//   backgroundColor: tokenfn('color.background.selected', N20),
//   // Fallback set as babel plugin inserts one otherwise
//   color: tokenfn('color.text.selected', 'currentColor'),
//   ':visited': {
//     color: tokenfn('color.text.selected', 'currentColor'),
//   },
//   ':hover': {
//     backgroundColor: tokenfn('color.background.selected:hover', N20),
//     color: tokenfn('color.text.selected', 'currentColor'),
//   },
//   ':active': {
//     backgroundColor: tokenfn('color.background.selected:active', N30),
//     color: tokenfn('color.text.selected', 'currentColor'),
//   },
// });

export const content = css({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  flexGrow: 1,
  lineHeight: 1.22,
  outline: 'none',
  overflow: 'hidden',
  textAlign: 'left',
})

export const title = css({
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const description = css({
  marginTop: GRID_SIZE * 0.375,
  color: token('font.subtlest'),
  fontSize: 12,
})

export const iconBefore = css({
  display: 'flex',
  marginRight: GRID_SIZE * 1.5,
  alignItems: 'center',
  flexShrink: 0,
})

export const iconAfter = css({
  display: 'flex',
  marginLeft: GRID_SIZE * 1.5,
  alignItems: 'center',
  flexShrink: 0,
})
