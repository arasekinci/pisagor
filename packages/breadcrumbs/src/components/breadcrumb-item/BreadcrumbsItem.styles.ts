import styled from '@emotion/styled'
import { colors } from '@pisagor/theme'
import Link from '@pisagor/link'

export const Root = styled.li({
  position: 'relative',
  margin: 0,
})

export const Anchor = styled(Link)({
  color: 'currentColor',
  whiteSpace: 'nowrap',
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  cursor: 'pointer',
  transition: '50ms',
  textDecoration: 'none !important',

  ':hover': {
    color: colors.N400,
  },

  '.material-icons': {
    fontSize: '1.5em !important',
  },
})

export const Text = styled.span({
  fontSize: '1em',
  lineHeight: 1,
})
