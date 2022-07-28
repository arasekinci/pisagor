import { css } from '@emotion/css'

export const root = css({
  display: 'flex',
  gap: 8,
  minWidth: 0,
  height: 'inherit',
  alignItems: 'center',
  flexGrow: 1,

  '& > *': {
    flexShrink: 0,
  },
})
