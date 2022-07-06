import { css } from '@emotion/css'
import { B100, N0, N10, N20, N40 } from '@pisagor/core/colors'

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
  border: `2px solid ${N40}`,
  backgroundColor: N10,
  boxSizing: 'border-box',
  pointerEvents: 'auto',
  wordWrap: 'break-word',
  transition: '200ms',
  resize: 'none',

  ':hover': {
    backgroundColor: N20,
  },

  ':focus': {
    backgroundColor: N0,
    borderColor: B100,
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
