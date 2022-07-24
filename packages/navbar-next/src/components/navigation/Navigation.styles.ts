import { css } from '@emotion/css'

export const root = css({
  display: 'flex',
  height: '100%',
  position: 'relative',
  alignItems: 'stretch',
  flexGrow: 0,

  '& > *': {
    margin: '0 4px',
    flexShrink: 0,
  },
})
