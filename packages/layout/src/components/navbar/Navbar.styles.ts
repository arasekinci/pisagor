import styled from '@emotion/styled'

import type { NavbarPosition } from './Navbar.types'

export const Root = styled.div<{
  position: NavbarPosition
}>(({ position }) => ({
  position,
  gridArea: 'navbar',
  top: 'var(--bannerHeight, 0px)',
  left: 'var(--leftPanelWidth, 0px)',
  right: 'var(--rightPanelWidth, 0px)',
  height: 'var(--navbarHeight, 0px)',
  zIndex: 3,
}))
