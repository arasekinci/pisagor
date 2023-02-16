import { css } from '@emotion/css'
import { BORDER_RADIUS } from '@pisagor/core/constants'
import { background, font } from '@pisagor/core/tokens'

export const root = css({
  position: 'relative',
  padding: 4,
  height: 28,
  borderRadius: BORDER_RADIUS,

  '&:first-child': {
    marginLeft: 0,
  },

  '&:hover': {
    color: font('text'),
    backgroundColor: background('neutral'),
  },

  '& > *': {
    width: 'auto',
    height: '100%',
    display: 'block',
  },
})
