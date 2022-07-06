import { css } from '@emotion/css'

export const nav = css({
  fontSize: '1rem',
})

export const list = css({
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  alignItems: 'center',
  padding: 0,
})

export const seperator = css({
  color: 'var(--breadcrumbs-color)',
  minWidth: 20,
  fontSize: '1em',
  textAlign: 'center',
  userSelect: 'none',
  margin: '0 2px',
  lineHeight: 1,

  span: {
    display: 'block',
  },
})
