import styled from '@emotion/styled'
import { colors } from '@pisagor/core'

export const Root = styled.div({
  margin: '24px 0',
})

export const Header = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
})

export const Title = styled.div({
  maxWidth: '100%',
  flex: 1,

  h1: {
    fontSize: '1.71429em',
    color: colors.N800,
    fontWeight: 500,
    outline: 2,
  },
})

export const Actions = styled.div({
  flex: '0 0 auto',
  maxWidth: '100%',
  paddingLeft: 32,
  whiteSpace: 'nowrap',
})

export const Body = styled.div({
  marginTop: 16,
})
