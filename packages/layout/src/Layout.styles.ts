import { css } from '@emotion/css'

export const root = css({
  outline: 'none',
  display: 'grid',
  height: ' 100vh',
  gridTemplateAreas:
    '"left-panel banner right-panel" "left-panel navbar right-panel" "left-panel main right-panel"',
  gridTemplateColumns:
    'var(--leftPanelWidth, 0px) minmax(0, 1fr) var(--rightPanelWidth, 0px)',
  gridTemplateRows: 'var(--bannerHeight, 0px) var(--navbarHeight, 0px) auto',
})
