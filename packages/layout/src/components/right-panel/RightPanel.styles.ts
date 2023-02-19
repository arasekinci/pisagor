import styled from '@emotion/styled'
import token from '@pisagor/core/tokens'

import type { RightPanelPosition } from './RightPanel.types'

export const Root = styled.div<{
  position: RightPanelPosition
}>(({ position }) => ({
  position,
  gridArea: 'right-panel',
  width: 'var(--rightPanelWidth, 0px)',
  right: 0,
  minHeight: '100%',
  height: position === 'fixed' ? '100%' : 'auto',
  transition: 'width 300ms cubic-bezier(0.2,0,0,1) 0s',
  zIndex: 4,
  backgroundColor: token('background.status.neutral'),
}))
