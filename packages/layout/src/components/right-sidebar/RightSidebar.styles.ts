import styled from '@emotion/styled'
import { background } from '@pisagor/core/tokens'

import type { RightSidebarPosition } from './RightSidebar.types'

export const Root = styled.div<{
  position: RightSidebarPosition
}>(({ position }) => ({
  position,
  width: 'var(--rightSidebarWidth, 0px)',
  right: 'var(--rightPanelWidth, 0px)',
  minHeight: '100%',
  height: position === 'fixed' ? '100%' : 'auto',
  transition: 'width 300ms cubic-bezier(0.2,0,0,1) 0s',
  zIndex: 2,
  backgroundColor: background('neutral'),
}))
