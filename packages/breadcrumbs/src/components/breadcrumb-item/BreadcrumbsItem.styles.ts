import type { Theme } from '@pisagor/core'
import { css } from '@emotion/css'

export const root = css({
  position: 'relative',
  margin: 0,
})

export const anchor = (theme: Theme) =>
  css({
    color: 'currentColor',
    whiteSpace: 'nowrap',
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    cursor: 'pointer',
    transition: '50ms',
    textDecoration: 'none !important',

    ':hover': {
      color: theme.breadcrumbs.hoverColor,
    },

    '.material-icons': {
      fontSize: '1.5em !important',
    },
  })

export const text = css({
  fontSize: '1em',
  lineHeight: 1,
})
