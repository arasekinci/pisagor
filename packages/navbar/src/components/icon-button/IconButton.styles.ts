import styled from '@emotion/styled'
import { colors } from '@pisagor/core'

export const Root = styled.button({
  position: 'relative',
  color: colors.N600,
  alignItems: 'baseline',
  borderWidth: '0',
  borderRadius: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  fontStyle: 'normal',
  fontWeight: '500',
  maxWidth: '100%',
  textAlign: 'center',
  transition:
    'background 0.1s ease-out,box-shadow 0.15s cubic-bezier(0.47,0.03,0.49,1.38)',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  height: 'auto',
  lineHeight: '2.2857142857142856em',
  padding: '4px',
  verticalAlign: 'middle',
  width: 'auto',
  justifyContent: 'center',
  outline: 'none',
  margin: '0 2px',
  flexShrink: 0,
  backgroundColor: 'transparent',

  ':hover': {
    color: colors.B400,
    backgroundColor: colors.B50,
  },

  ':focus': {
    color: colors.N600,
    backgroundColor: colors.B50,
    boxShadow: `0 0 0 2px ${colors.B200}`,
  },
})
