import { css } from '@emotion/css'
import { BORDER_RADIUS, LAYER_TOOLTIP } from '@pisagor/core/constants'

export const root = css({
  boxSizing: 'border-box',
  maxWidth: '240px',
  padding: '2px 6px',
  borderRadius: BORDER_RADIUS,
  color: 'var(--tooltip-color)',
  fontSize: '12px',
  zIndex: LAYER_TOOLTIP,
  overflowWrap: 'break-word',
  wordWrap: 'break-word',
  backgroundColor: 'var(--tooltip-background)',
})
