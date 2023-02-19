import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const root = css({
  width: '100%',
  height: '100%',
  color: token('font.subtlest'),
  minWidth: 240,
  backgroundColor: token('background.status.neutral'),
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
})
