import { css } from '@emotion/css'
import { layer } from '@pisagor/core/tokens'

export const root = css({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: layer('blanket'),
  overflowY: 'auto',
  pointerEvents: 'initial',
  backgroundColor: 'var(--blanket-background)',
})
