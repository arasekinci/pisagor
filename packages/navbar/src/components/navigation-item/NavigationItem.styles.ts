import { css } from '@emotion/css'
import { background, font } from '@pisagor/core/tokens'

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
  color: font('subtlest'),
  fontWeight: 500,
  borderRadius: 3,
  height: '2.2857142857142856em',
  lineHeight: '2.2857142857142856em',
  padding: '0 4px',

  '&:hover': {
    color: font('info'),
    backgroundColor: background('info.bold'),
  },

  '&:focus': {
    color: font('subtlest'),
    boxShadow: `0 0 0 2px ${background('info')}`,
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
    backgroundColor: background('info.bold'),
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
  },

  [`.${button}`]: {
    color: background('info.bold'),
  },
})
