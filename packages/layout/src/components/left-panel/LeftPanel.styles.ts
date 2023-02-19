import styled from '@emotion/styled'
import token from '@pisagor/core/tokens'

import type { LeftPanelPosition } from './LeftPanel.types'

export const Root = styled.div<{
  position: LeftPanelPosition
}>(({ position }) => ({
  position,
  gridArea: 'left-panel',
  width: 'var(--leftPanelWidth, 0px)',
  left: 0,
  minHeight: '100%',
  height: position === 'fixed' ? '100%' : 'auto',
  transition: 'width 300ms cubic-bezier(0.2,0,0,1) 0s',
  zIndex: 4,
  backgroundColor: token('background.status.neutral'),
}))

export const Scrollable = styled.div({
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
})
