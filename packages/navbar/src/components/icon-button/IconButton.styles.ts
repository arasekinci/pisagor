import styled from '@emotion/styled'
import { background, font } from '@pisagor/core/tokens'

export const Root = styled.button({
  position: 'relative',
  color: font('text'),
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
    color: font('info'),
    backgroundColor: background('info'),
  },

  ':focus': {
    color: font('info'),
    backgroundColor: background('info'),
    boxShadow: `0 0 0 2px ${background('info.bold.active')}`,
  },
})
