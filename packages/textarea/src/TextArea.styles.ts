import styled from '@emotion/styled'
import { B100, N0, N10, N20, N40 } from '@pisagor/core/colors'

export const Root = styled.textarea({
  width: '100%',
  display: 'block',
  padding: '8px 6px',
  height: '6em',
  borderRadius: 3,
  outline: '0',
  border: `2px solid ${N40}`,
  backgroundColor: N10,
  boxSizing: 'border-box',
  fontSize: '1em',
  pointerEvents: 'auto',
  wordWrap: 'break-word',
  transition: '200ms',
  resize: 'none',

  ':hover': {
    backgroundColor: N20,
  },

  ':focus': {
    backgroundColor: N0,
    borderColor: B100,
  },
})
