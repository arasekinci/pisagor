import styled from '@emotion/styled'
import { colors } from '@pisagor/core'

export const Root = styled.header({
  position: 'relative',
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 12,
  paddingRight: 12,
  color: colors.N600,
  height: 'var(--navbarHeight, 0px)',
  boxSizing: 'border-box',
  backgroundColor: colors.N0,

  '&::after': {
    position: 'absolute',
    content: '""',
    top: '100%',
    right: 0,
    left: 0,
    height: 4,
    background: `linear-gradient(180deg, ${colors.N40A} 0, ${colors.N40A} 1px, ${colors.N30A} 1px, transparent 4px)`,
  },
})

export const Navigation = styled.nav({
  display: 'flex',
  minWidth: 0,
  height: 'inherit',
  alignItems: 'center',
  flexGrow: 1,

  '& > *': {
    flexShrink: 0,
  },
})

export const Menu = styled.div({
  display: 'flex',
  height: '100%',
  position: 'relative',
  alignItems: 'stretch',
  flexGrow: 0,

  '& > *': {
    margin: '0 4px',
    flexShrink: 0,
  },
})

export const Actions = styled.div({
  display: 'flex',
  flexGrow: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',

  '& > *': {
    marginRight: 4,
  },
})
