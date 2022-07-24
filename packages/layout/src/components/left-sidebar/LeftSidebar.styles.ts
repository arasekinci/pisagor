import styled from '@emotion/styled'
import { N10 } from '@pisagor/core/colors'

import type { LeftSidebarPosition } from './LeftSidebar.types'

export const Root = styled.div<{
  position: LeftSidebarPosition
}>(({ position }) => ({
  position,
  width: 'var(--leftSidebarWidth, 0px)',
  left: 'var(--leftPanelWidth, 0px)',
  minHeight: '100%',
  height: position === 'fixed' ? '100%' : 'auto',
  transition: 'width 300ms cubic-bezier(0.2,0,0,1) 0s',
  zIndex: 2,
  backgroundColor: N10,
}))
