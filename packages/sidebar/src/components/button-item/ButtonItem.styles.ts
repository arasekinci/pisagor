import styled from '@emotion/styled'
import { colors } from '@pisagor/theme'

export const Root = styled.div({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  minHeight: 40,
  margin: 0,
  alignItems: 'center',
  border: 0,
  fontSize: 14,
  outline: 0,
  textDecoration: 'none',
  userSelect: 'none',
  cursor: 'not-allowed',
  padding: '8px 10px',
  borderRadius: 3,

  ':hover': {
    color: colors.N500,
    backgroundColor: colors.N30,
  },

  ':focus': {
    backgroundColor: 'transparent',
    color: colors.N500,
  },
})
