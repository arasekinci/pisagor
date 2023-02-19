import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const root = css({
  width: '100%',
  fontSize: '1em',

  ':not(:first-child)': {
    marginTop: 8,
  },
})

export const textarea = css({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  width: '100%',
  display: 'block',
  padding: '8px',
  height: '6em',
  borderRadius: 3,
  outline: '0',
  border: `2px solid ${token('border.status.neutral')}`,
  backgroundColor: token('background.status.neutral'),
  boxSizing: 'border-box',
  pointerEvents: 'auto',
  wordWrap: 'break-word',
  transition: '200ms',
  resize: 'none',

  ':hover': {
    backgroundColor: token('background.status.neutral.hover'),
  },

  ':focus': {
    backgroundColor: token('background.status.neutral.active'),
    borderColor: token('background.status.neutral.bold'),
  },
})

export const size = {
  large: css({
    height: '70px',
  }),
  medium: css({
    height: '60px',
  }),
  small: css({
    height: '50px',
  }),
}
