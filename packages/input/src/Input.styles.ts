import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const root = css({
  width: '100%',
  fontSize: '1em',
})

export const input = css({
  fontFamily: token('font.family'),
  fontSize: 'inherit',
  width: '100%',
  display: 'block',
  borderRadius: 3,
  outline: '0',
  border: `2px solid ${token('border.input')}`,
  backgroundColor: token('background.input'),
  boxSizing: 'border-box',
  pointerEvents: 'auto',
  wordWrap: 'break-word',
  transition: '200ms',

  ':hover': {
    borderColor: token('border.input.hover'),
    backgroundColor: token('background.input.hover'),
  },

  ':focus': {
    borderColor: token('border.input.focus'),
    backgroundColor: token('background.input.focus'),
  },

  ':disabled': {
    borderColor: token('border.input.disabled'),
    backgroundColor: token('background.input.disabled'),
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
    height: '32px',
    padding: '0 4px',
  }),
}
