import { css } from '@emotion/css'

export const root = css({
  color: 'var(--alert-color)',
  display: 'flex',
  padding: 16,
  borderRadius: 3,
})

export const appearance = {
  default: css({
    backgroundColor: 'var(--alert-default-background)',
  }),
  error: css({
    backgroundColor: 'var(--alert-error-background)',
  }),
  help: css({
    backgroundColor: 'var(--alert-help-background)',
  }),
  info: css({
    backgroundColor: 'var(--alert-info-background)',
  }),
  success: css({
    backgroundColor: 'var(--alert-success-background)',
  }),
  warning: css({
    backgroundColor: 'var(--alert-warning-background)',
  }),
}

export const icon = css({
  flex: '0 0 40px',
})

export const content = css({
  flex: 1,
  wordBreak: 'break-word',
})

export const title = css({
  color: 'inherit',
  fontSize: '1.14286em',
  lineHeight: 1.25,
  fontWeight: 600,
  margin: '0 0 8px 0',
  letterSpacing: '-0.006em',
})
