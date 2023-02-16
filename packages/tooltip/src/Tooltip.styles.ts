import { css } from '@emotion/css'
import { BORDER_RADIUS } from '@pisagor/core/constants'
import { font, layer, palette } from '@pisagor/core/tokens'

export const root = css({
  boxSizing: 'border-box',
  maxWidth: '240px',
  padding: '2px 6px',
  color: font('text.inverse'),
  fontSize: '12px',
  zIndex: layer('tooltip'),
  borderRadius: BORDER_RADIUS,
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
  backgroundColor: palette('neutral.1000'),
})
