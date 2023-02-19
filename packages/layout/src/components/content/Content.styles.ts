import { css } from '@emotion/css'

export const root = css({
  flex: 1,
  minWidth: 0,
  marginLeft: 0,
  marginRight: 0,
  padding: '0 var(--rightSidebarWidth, 0px) 0 var(--leftSidebarWidth, 0px)',
  transition: 'padding 300ms cubic-bezier(0.2,0,0,1) 0s',
  zIndex: 1,
})
