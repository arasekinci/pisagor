import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const root = css({
  position: 'relative',
  color: token('font.text'),
  alignItems: 'baseline',
  borderWidth: 0,
  borderRadius: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  fontStyle: 'normal',
  fontWeight: 500,
  maxWidth: '100%',
  textAlign: 'center',
  transition:
    'background 0.1s ease-out,box-shadow 0.15s cubic-bezier(0.47,0.03,0.49,1.38)',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  height: 'auto',
  lineHeight: '2.2857142857142856em',
  padding: 4,
  verticalAlign: 'middle',
  width: 'auto',
  justifyContent: 'center',
  outline: 'none',
  flexShrink: 0,
  backgroundColor: 'transparent',

  ':hover': {
    color: token('font.status.info'),
    backgroundColor: token('background.status.info'),
  },

  ':focus': {
    color: token('font.status.info'),
    backgroundColor: token('background.status.info'),
    boxShadow: `0 0 0 2px ${token('background.status.info.bold.active')}`,
  },
})
