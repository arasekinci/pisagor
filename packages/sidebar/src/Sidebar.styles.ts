import styled from '@emotion/styled'
import { background, font } from '@pisagor/core/tokens'

export const Root = styled.div({
  width: '100%',
  height: '100%',
  color: font('subtlest'),
  minWidth: 240,
  backgroundColor: background('neutral'),
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
})
