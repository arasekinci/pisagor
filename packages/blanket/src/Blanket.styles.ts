import { css } from '@emotion/css'
import { LAYER_BLANKET } from '@pisagor/core/constants'

export const root = css({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: LAYER_BLANKET,
  overflowY: 'auto',
  pointerEvents: 'initial',
  backgroundColor: 'var(--blanket-background)',
})
