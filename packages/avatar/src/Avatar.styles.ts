import { css } from '@emotion/css'
import token, { palette } from '@pisagor/core/tokens'

export const root = css({
  alignItems: 'center',
  backgroundColor: palette('neutral.600'),
  boxSizing: 'content-box',
  cursor: 'inherit',
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',
  outline: 'none',
  position: 'static',
  transform: 'translateZ(0px)',
  transition: 'transform 200ms ease 0s, opacity 200ms ease 0s',
  boxShadow: `0 0 0 2px ${token('background')}`,
  verticalAlign: 'middle',
  border: 'none',
  margin: 2,
  padding: 0,
})

export const shape = {
  circle: css({
    borderRadius: '50%',

    img: {
      borderRadius: '50%',
    },
  }),
  square: css({
    borderRadius: 3,

    img: {
      borderRadius: 3,
    },
  }),
}

export const size = {
  xsmall: css({
    fontSize: 12,
    width: 16,
    height: 16,
  }),
  small: css({
    fontSize: 13,
    width: 24,
    height: 24,
  }),
  medium: css({
    fontSize: 14,
    width: 32,
    height: 32,
  }),
  large: css({
    fontSize: 15,
    width: 40,
    height: 40,
  }),
  xlarge: css({
    fontSize: 16,
    width: 48,
    height: 48,
  }),
}

export const name = css({
  color: token('font.text.inverse'),
  fontSize: '1em',
  fontWeight: 600,
  display: 'block',
})

export const img = css({
  width: '100%',
  height: '100%',
  display: 'block',
})

export const svg = css({
  color: token('font.text.inverse'),
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  pointerEvents: 'none',
  verticalAlign: 'bottom',
  display: 'block',
})
