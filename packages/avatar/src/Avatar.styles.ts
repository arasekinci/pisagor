import { css } from '@emotion/css'
import { N0, N90 } from '@pisagor/core/colors'

export const root = css({
  alignItems: 'center',
  backgroundColor: N90,
  boxSizing: 'content-box',
  cursor: 'inherit',
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',
  outline: 'none',
  position: 'static',
  transform: 'translateZ(0px)',
  transition: 'transform 200ms ease 0s, opacity 200ms ease 0s',
  boxShadow: `0 0 0 2px ${N0}`,
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
  color: N0,
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
  color: N0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  pointerEvents: 'none',
  verticalAlign: 'bottom',
  display: 'block',
})

export const presence = css({
  pointerEvents: 'none',
  position: 'absolute',
  width: 15,
  height: 15,
  right: -2,
  bottom: -2,
  borderRadius: '50%',
  border: `2px solid ${N0}`,
  backgroundColor: N0,
  boxSizing: 'border-box',
})
