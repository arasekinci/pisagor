import { css } from '@emotion/css'

export const root = css({
  position: 'relative',
  margin: 0,
})

export const anchor = css({
  color: 'var(--breadcrumbs-color)',
  whiteSpace: 'nowrap',
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  cursor: 'pointer',
  transition: '50ms',
  textDecoration: 'none !important',

  ':hover': {
    color: 'var(--breadcrumbs-color-hover)',
  },
})

export const text = css({
  fontSize: '1em',
  lineHeight: 1,
})
