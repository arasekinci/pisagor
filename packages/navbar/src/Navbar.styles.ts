import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const root = css({
  position: 'relative',
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 16,
  paddingRight: 16,
  color: token('font.subtle'),
  height: 'var(--navbarHeight, 0px)',
  boxSizing: 'border-box',
  backgroundColor: token('background'),
  boxShadow: token('shadow'),
})
