import styled from '@emotion/styled'

import type { BannerPosition } from './Banner.types'

export const Root = styled.div<{
  position: BannerPosition
}>(({ position }) => ({
  position,
  gridArea: 'banner',
  top: 0,
  left: 'var(--leftPanelWidth, 0px)',
  right: 'var(--rightPanelWidth, 0px)',
  height: 'var(--bannerHeight, 0px)',
  zIndex: 3,
}))
