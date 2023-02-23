import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const root = css({
  position: 'relative',
  margin: 0,
})

export const anchor = css({
  color: token('font.subtlest'),
  whiteSpace: 'nowrap',
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  cursor: 'pointer',
  transition: '50ms',
  textDecoration: 'none !important',

  ':hover': {
    color: token('font.text'),
  },
})

export const text = css({
  fontSize: '1em',
  lineHeight: 1,
})
