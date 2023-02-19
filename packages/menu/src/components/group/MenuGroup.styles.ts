import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const root = css({
  flexShrink: 1,
  padding: '6px 0',
  overflow: 'auto',
})

export const separator = css({
  borderTop: `2px solid ${token('background.status.neutral')}`,
})

export const title = css({
  color: token('font.subtlest'),
  fontSize: 11,
  fontWeight: 700,
  lineHeight: 1.45455,
  textTransform: 'uppercase',
  padding: '0px 20px',
  margin: '6px 0',
})
