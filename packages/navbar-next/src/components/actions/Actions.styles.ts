import { css } from '@emotion/css'

export const root = css({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  '& > *': {
    marginRight: 4,
  },
})
