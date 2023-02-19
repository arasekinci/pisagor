import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const root = css({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  minHeight: 40,
  margin: 0,
  alignItems: 'center',
  border: 0,
  fontSize: 14,
  outline: 0,
  textDecoration: 'none',
  userSelect: 'none',
  cursor: 'not-allowed',
  padding: '8px 10px',
  borderRadius: 3,

  ':hover': {
    color: token('font.text'),
    backgroundColor: token('background.status.neutral'),
  },

  ':focus': {
    backgroundColor: 'transparent',
    color: token('font.text'),
  },
})
