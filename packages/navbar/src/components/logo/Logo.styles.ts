import { css } from '@emotion/css'
import { B400, B50 } from '@pisagor/core/colors'
import { BORDER_RADIUS } from '@pisagor/core/constants'

export const root = css({
  position: 'relative',
  padding: 4,
  height: 28,
  borderRadius: BORDER_RADIUS,

  '&:first-child': {
    marginLeft: 0,
  },

  '&:hover': {
    color: B400,
    backgroundColor: B50,
  },

  '& > *': {
    width: 'auto',
    height: '100%',
    display: 'block',
  },
})
