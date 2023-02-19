import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const root = css({
  position: 'relative',
  maxWidth: 600,
  transition: 'width 300ms',
  marginRight: 8,
  boxSizing: 'border-box',
})

export const search = css({
  position: 'relative',

  span: {
    position: 'absolute',
    top: '50%',
    left: 8,
    color: token('font.subtlest'),
    transform: 'translateY(-50%)',
  },
})

export const searchInput = css({
  input: {
    height: 32,
    padding: '0px 12px 0px 28px',
    fontSize: 14,
    lineHeight: 20,
  },
})

export const searchResult = css({
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  boxShadow: '0 4px 8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31)',
  backgroundColor: token('background'),
  borderRadius: 3,
  overflow: 'hidden',
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  zIndex: 100,
})
