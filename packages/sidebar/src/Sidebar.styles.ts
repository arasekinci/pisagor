import styled from '@emotion/styled'
import { N10, N500 } from '@pisagor/core/colors'

export const Root = styled.div({
  width: '100%',
  height: '100%',
  color: N500,
  minWidth: 240,
  backgroundColor: N10,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
})
