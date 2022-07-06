import { css } from '@emotion/css'

export const root = css({
  fontSize: 12,
  lineHeight: 1,
  fontWeight: 'normal',
  textAlign: 'center',
  display: 'inline-block',
  minWidth: 1,
  padding: '2px 6px',
  borderRadius: 8,
})

export const appearance = {
  default: css({
    color: 'var(--badge-default-color)',
    backgroundColor: 'var(--badge-default-background)',
  }),
  error: css({
    color: 'var(--badge-error-color)',
    backgroundColor: 'var(--badge-error-background)',
  }),
  help: css({
    color: 'var(--badge-help-color)',
    backgroundColor: 'var(--badge-help-background)',
  }),
  info: css({
    color: 'var(--badge-info-color)',
    backgroundColor: 'var(--badge-info-background)',
  }),
  success: css({
    color: 'var(--badge-success-color)',
    backgroundColor: 'var(--badge-success-background)',
  }),
  warning: css({
    color: 'var(--badge-warning-color)',
    backgroundColor: 'var(--badge-warning-background)',
  }),
}
