import { css } from '@emotion/css'
import { layer } from '@pisagor/core/tokens'
import { BORDER_RADIUS } from '@pisagor/core/constants'

export const root = css({
  display: 'block',
  boxSizing: 'border-box',
  backgroundColor: 'var(--popup-background)',
  zIndex: layer('layer'),
  borderRadius: BORDER_RADIUS,
  boxShadow: '0 4px 8px -2px var(--popup-box-shadow)',
  overflow: 'auto',
})
