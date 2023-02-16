import styled from '@emotion/styled'
import { background, font } from '@pisagor/core/tokens'

import type { SlotPosition } from './Slot.types'

export const Root = styled.div({
  position: 'relative',
  height: '100%',
})

export const Scrollable = styled.div({
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  zIndex: 1,
})

export const Resize = styled.div<{
  position: SlotPosition
}>(({ position }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  [position]: '100%',
  outline: 'none',
  zIndex: 2,
}))

export const ResizeShadow = styled.div({
  position: 'absolute',
  width: 3,
  top: 0,
  bottom: 0,
  left: -3,
  background:
    'linear-gradient(to left, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.2) 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0) 100% )',
  opacity: 0.5,
  cursor: 'ew-resize',
  pointerEvents: 'none',
  transitionDuration: '0.22s',
  transitionProperty: 'left,opacity,width',
  transitionTimingFunction: 'cubic-bezier(0.2,0,0,1)',

  ':hover': {
    background: background('info'),
  },
})

export const ResizeButton = styled.button({
  width: 24,
  height: 24,
  padding: 0,
  position: 'absolute',
  top: 32,
  left: 0,
  color: font('subtlest'),
  backgroundColor: background(),
  border: 0,
  borderRadius: '50%',
  boxShadow: '0 0 0 1px rgb(9 30 66 / 8%),0 2px 4px 1px rgb(9 30 66 / 8%)',
  cursor: 'pointer',
  outline: 0,
  transition:
    'background-color 100ms linear, color 100ms linear, opacity 350ms cubic-bezier(0.2,0,0,1)',
  transform: 'translateX(-50%) rotate(180deg)',

  ':hover': {
    color: font('text'),
    background: background('info'),
  },
})
