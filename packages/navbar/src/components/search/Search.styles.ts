import styled from '@emotion/styled'
import { colors } from '@pisagor/theme'

export const Root = styled.div({
  position: 'relative',
  maxWidth: 600,
  transition: 'width 300ms',
  marginRight: 8,
  boxSizing: 'border-box',
})

export const Search = styled.div({
  position: 'relative',

  '.material-icons': {
    position: 'absolute',
    top: 7,
    left: 8,
    color: colors.N200,
  },
})

export const SearchInput = styled.input({
  width: '100%',
  height: 32,
  padding: '0px 12px 0px 28px',
  boxSizing: 'border-box',
  outline: 'none',
  borderRadius: 5,
  fontSize: 14,
  lineHeight: 20,
  color: colors.N200,
  border: `2px solid ${colors.N40}`,
  boxShadow: 'none',
  backgroundColor: colors.N0,

  ':focus': {
    boxShadow: `0 0 0 2px ${colors.B200}`,
    borderColor: 'transparent',
  },
})

export const SearchResult = styled.div({
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  boxShadow: '0 4px 8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31)',
  backgroundColor: colors.N0,
  borderRadius: 3,
  overflow: 'hidden',
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  zIndex: 100,
})
