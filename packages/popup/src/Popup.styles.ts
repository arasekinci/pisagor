import { css } from '@emotion/css'
import { BORDER_RADIUS, LAYER_LAYER } from '@pisagor/core/constants'

export const root = css({
  display: 'block',
  boxSizing: 'border-box',
  backgroundColor: 'var(--popup-background)',
  zIndex: LAYER_LAYER,
  borderRadius: BORDER_RADIUS,
  boxShadow: '0 4px 8px -2px var(--popup-box-shadow)',
  overflow: 'auto',
})
