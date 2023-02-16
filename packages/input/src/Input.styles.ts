import { css } from '@emotion/css'
import { border, background } from '@pisagor/core/tokens'

export const root = css({
  width: '100%',
  fontSize: '1em',

  ':not(:first-child)': {
    marginTop: 8,
  },
})

export const input = css({
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  fontSize: 'inherit',
  width: '100%',
  display: 'block',
  borderRadius: 3,
  outline: '0',
  border: `2px solid ${border('neutral')}`,
  backgroundColor: background('neutral'),
  boxSizing: 'border-box',
  pointerEvents: 'auto',
  wordWrap: 'break-word',
  transition: '200ms',

  ':hover': {
    backgroundColor: background('neutral.hover'),
  },

  ':focus': {
    backgroundColor: background('neutral.active'),
    borderColor: border('neutral'),
  },
})

export const size = {
  large: css({
    height: '44px',
    padding: '0 12px',
  }),
  medium: css({
    height: '36px',
    padding: '0 8px',
  }),
  small: css({
    height: '28px',
    padding: '0 4px',
  }),
}
