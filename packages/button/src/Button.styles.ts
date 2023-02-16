import { css } from '@emotion/css'
import { background, font } from '@pisagor/core/tokens'

export const root = css({
  color: font('text.inverse'),
  alignItems: 'baseline',
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

export const appearance = {
  default: css({
    color: font('text'),
    backgroundColor: background('neutral'),

    ':hover': {
      backgroundColor: background('neutral.hover'),
    },

    ':active': {
      backgroundColor: background('neutral.active'),
    },
  }),
  error: css({
    backgroundColor: background('error.bold'),

    ':hover': {
      backgroundColor: background('error.bold.hover'),
    },

    ':active': {
      backgroundColor: background('error.bold.active'),
    },
  }),
  help: css({
    backgroundColor: background('help.bold'),

    ':hover': {
      backgroundColor: background('help.bold.hover'),
    },

    ':active': {
      backgroundColor: background('help.bold.active'),
    },
  }),
  info: css({
    backgroundColor: background('info.bold'),

    ':hover': {
      backgroundColor: background('info.bold.hover'),
    },

    ':active': {
      backgroundColor: background('info.bold.active'),
    },
  }),
  success: css({
    backgroundColor: background('success.bold'),

    ':hover': {
      backgroundColor: background('success.bold.hover'),
    },

    ':active': {
      backgroundColor: background('success.bold.active'),
    },
  }),
  warning: css({
    backgroundColor: background('warning.bold'),

    ':hover': {
      backgroundColor: background('warning.bold.hover'),
    },

    ':active': {
      backgroundColor: background('warning.bold.active'),
    },
  }),
}

export const size = {
  large: css({
    fontSize: 15,
    minWidth: '40px',
    minHeight: '40px',
    lineHeight: '40px',
    padding: '0 16px',
  }),
  medium: css({
    fontSize: 14,
    minWidth: '32px',
    minHeight: '32px',
    lineHeight: '32px',
    padding: '0 12px',
  }),
  small: css({
    fontSize: 13,
    minWidth: '24px',
    minHeight: '24px',
    lineHeight: '24px',
    padding: '0 8px',
  }),
}
