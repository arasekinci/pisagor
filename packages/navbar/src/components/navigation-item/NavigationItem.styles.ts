import { css } from '@emotion/css'
import { B200, B400, B50, N600 } from '@pisagor/core/colors'

export const root = css({
  position: 'relative',
  height: '100%',
  margin: '0 4px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  flexShrink: 0,
})

export const button = css({
  color: N600,
  borderRadius: 3,
  height: '2.2857142857142856em',
  lineHeight: '2.2857142857142856em',
  padding: '0 4px',

  '&:hover': {
    color: B400,
    backgroundColor: B50,
  },

  '&:focus': {
    color: N600,
    boxShadow: `0 0 0 2px ${B200}`,
  },
})

export const selected = css({
  '&:after': {
    position: 'absolute',
    content: '""',
    height: 3,
    bottom: 0,
    right: 4,
    left: 4,
    backgroundColor: B400,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
  },

  [`.${button}`]: {
    color: B400,
  },
})
