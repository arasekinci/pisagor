import styled from '@emotion/styled'
import { colors } from '@pisagor/core'

import Anchor from '@/components/anchor'
import Image from '@/components/image'

export const Root = styled(Anchor)({
  display: 'block',
  minHeight: '100%',
  background: colors.N0,
  border: `1px solid ${colors.N30}`,
  boxShadow: '0 2px 4px rgb(9 30 66 / 10%)',
  overflow: 'hidden',
  borderRadius: 4,
  boxSizing: 'border-box',

  ':hover': {
    textDecoration: 'none',
    boxShadow: '0 8px 16px -3px rgba(9, 30, 66, 0.2)',
  },
})

export const Figure = styled(Image)({
  width: '100%',
  height: 'auto',
  backgroundColor: colors.N10,
})

export const Body = styled.div({
  padding: 24,

  p: {
    fontSize: 15,
  },

  'p:not([class])': {
    color: colors.N400,
  },
})

export const Title = styled.h3({
  fontSize: '1.4em',
  fontWeight: 500,
  margin: 0,
})
