import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

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
  color: token('font.subtlest'),
  fontWeight: 500,
  borderRadius: 3,
  height: '2.2857142857142856em',
  lineHeight: '2.2857142857142856em',
  padding: '0 4px',

  '&:hover': {
    color: token('font.status.info'),
    backgroundColor: token('background.status.info.bold'),
  },

  '&:focus': {
    color: token('font.subtlest'),
    boxShadow: `0 0 0 2px ${token('background.status.info')}`,
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
    backgroundColor: token('background.status.info.bold'),
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
  },

  [`.${button}`]: {
    color: token('background.status.info.bold'),
  },
})
