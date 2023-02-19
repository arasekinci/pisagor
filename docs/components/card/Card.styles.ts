import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const root = css({
  display: 'block',
  minHeight: '100%',
  background: token('background'),
  border: `1px solid ${token('border')}`,
  overflow: 'hidden',
  borderRadius: 4,
  boxSizing: 'border-box',

  ':hover': {
    textDecoration: 'none',
    boxShadow: '0 6px 12px -2px rgba(9, 30, 66, 0.15)',
  },
})

export const figure = css({
  width: '100%',
  height: 'auto',
  background: '#f4f5f7',
})

export const body = css({
  padding: 24,

  h3: {
    color: token('font.text'),
  },

  p: {
    color: token('font.subtlest'),
    fontSize: 15,
  },
})

export const title = css({
  fontSize: '1.4em',
  fontWeight: 500,
  margin: 0,
})
