import { css } from '@emotion/css'

export const root = css({
  alignItems: 'baseline',
  border: '0',
  margin: '0 2px',
  boxSizing: 'border-box',
  display: 'inline-flex',
  fontStyle: 'normal',
  fontWeight: '500',
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
    color: 'var(--button-default-color)',
    backgroundColor: 'var(--button-default-background)',

    ':hover': {
      color: 'var(--button-default-color-hover)',
      backgroundColor: 'var(--button-default-background-hover)',
    },

    ':active': {
      color: 'var(--button-default-color-active)',
      backgroundColor: 'var(--button-default-background-active)',
    },
  }),
  error: css({
    color: 'var(--button-error-color)',
    backgroundColor: 'var(--button-error-background)',

    ':hover': {
      color: 'var(--button-error-color-hover)',
      backgroundColor: 'var(--button-error-background-hover)',
    },

    ':active': {
      color: 'var(--button-error-color-active)',
      backgroundColor: 'var(--button-error-background-active)',
    },
  }),
  help: css({
    color: 'var(--button-help-color)',
    backgroundColor: 'var(--button-help-background)',

    ':hover': {
      color: 'var(--button-help-color-hover)',
      backgroundColor: 'var(--button-help-background-hover)',
    },

    ':active': {
      color: 'var(--button-help-color-active)',
      backgroundColor: 'var(--button-help-background-active)',
    },
  }),
  info: css({
    color: 'var(--button-info-color)',
    backgroundColor: 'var(--button-info-background)',

    ':hover': {
      color: 'var(--button-info-color-hover)',
      backgroundColor: 'var(--button-info-background-hover)',
    },

    ':active': {
      color: 'var(--button-info-color-active)',
      backgroundColor: 'var(--button-info-background-active)',
    },
  }),
  success: css({
    color: 'var(--button-success-color)',
    backgroundColor: 'var(--button-success-background)',

    ':hover': {
      color: 'var(--button-success-color-hover)',
      backgroundColor: 'var(--button-success-background-hover)',
    },

    ':active': {
      color: 'var(--button-success-color-active)',
      backgroundColor: 'var(--button-success-background-active)',
    },
  }),
  warning: css({
    color: 'var(--button-warning-color)',
    backgroundColor: 'var(--button-warning-background)',

    ':hover': {
      color: 'var(--button-warning-color-hover)',
      backgroundColor: 'var(--button-warning-background-hover)',
    },

    ':active': {
      color: 'var(--button-warning-color-active)',
      backgroundColor: 'var(--button-warning-background-active)',
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
