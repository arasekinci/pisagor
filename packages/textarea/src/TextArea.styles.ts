import { css } from '@emotion/css'
import { background, border } from '@pisagor/core/tokens'

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
  border: `2px solid ${border('neutral')}`,
  backgroundColor: background('neutral'),
  boxSizing: 'border-box',
  pointerEvents: 'auto',
  wordWrap: 'break-word',
  transition: '200ms',
  resize: 'none',

  ':hover': {
    backgroundColor: background('neutral.hover'),
  },

  ':focus': {
    backgroundColor: background('neutral.active'),
    borderColor: background('neutral.bold'),
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
