import { css } from '@emotion/css'

export const root = css({
  display: 'block',
})

export const variants = {
  error: css({
    backgroundColor: 'var(--alert-error-background)',
  }),
  success: css({
    backgroundColor: 'var(--alert-success-background)',
  }),
}
