import { css } from '@emotion/css'
import { LAYER_MODAL } from '@pisagor/core/constants'

export const root = css({
  position: 'fixed',
  display: 'flex',
  zIndex: LAYER_MODAL,
  overflow: 'hidden',
  maxWidth: '100vw',
  maxHeight: '100vh',
  backgroundColor: '#FFFFFF',
})

export const position = {
  top: css({
    top: 0,
    left: 0,
    width: '100vw',
  }),
  right: css({
    top: 0,
    right: 0,
    height: '100vh',
  }),
  bottom: css({
    left: 0,
    bottom: 0,
    width: '100vw',
  }),
  left: css({
    top: 0,
    left: 0,
    height: '100vh',
  }),
}

export const sidebar = css({
  alignItems: 'center',
  boxSizing: 'border-box',
  color: '#42526E',
  display: 'flex',
  flexShrink: 0,
  flexDirection: 'column',
  height: '100%',
  paddingBottom: 16,
  paddingTop: 24,
  width: 64,
})

export const content = css({
  flex: '1 1 0%',
  overflow: 'auto',
  marginTop: 24,
})
