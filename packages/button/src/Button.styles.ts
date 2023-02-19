import { css } from '@emotion/css'
import token, { palette } from '@pisagor/core/tokens'

import type { ButtonColor } from './button.types'

export const appearance = (color: ButtonColor, accent: boolean) => {
  if (color === 'default') {
    return css({
      color: token('font.text'),
      backgroundColor: palette(`neutral.200.alpha`),

      ':hover': {
        backgroundColor: palette(`neutral.300.alpha`),
      },

      ':active': {
        backgroundColor: palette(`neutral.400.alpha`),
      },
    })
  }

  if (accent) {
    return css({
      color: token('font.text.inverse'),
      backgroundColor: token(`background.accent.${color}.bold`),

      ':hover': {
        backgroundColor: token(`background.accent.${color}.bold.hover`),
      },

      ':active': {
        backgroundColor: token(`background.accent.${color}.bold.active`),
      },
    })
  }

  return css({
    color: token('font.text'),
    backgroundColor: token(`background.accent.${color}`),

    ':hover': {
      backgroundColor: token(`background.accent.${color}.hover`),
    },

    ':active': {
      backgroundColor: token(`background.accent.${color}.active`),
    },
  })
}

export const root = css({
  alignItems: 'center',
  border: 0,
  margin: 0,
  boxSizing: 'border-box',
  display: 'inline-flex',
  fontStyle: 'normal',
  fontWeight: 500,
  maxWidth: '100%',
  borderRadius: 3,
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  transition:
    'background 0.1s ease-out,box-shadow 0.15s cubic-bezier(0.47,0.03,0.49,1.38)',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  verticalAlign: 'middle',
  width: 'auto',
  justifyContent: 'center',
})

export const text = css({
  margin: '0 4px',
})

export const size = {
  large: css({
    fontSize: 15,
    minWidth: '40px',
    minHeight: '40px',
    lineHeight: '40px',
    padding: '0 8px',
  }),
  medium: css({
    fontSize: 14,
    minWidth: '32px',
    minHeight: '32px',
    lineHeight: '32px',
    padding: '0 6px',
  }),
  small: css({
    fontSize: 13,
    minWidth: '24px',
    minHeight: '24px',
    lineHeight: '24px',
    padding: '0 4px',
  }),
}
