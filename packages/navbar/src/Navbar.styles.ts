import { css } from '@emotion/css'
import { N0, N30A, N40A, N600 } from '@pisagor/core/colors'

export const root = css({
  position: 'relative',
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 16,
  paddingRight: 16,
  color: N600,
  height: 'var(--navbarHeight, 0px)',
  boxSizing: 'border-box',
  backgroundColor: N0,

  '&::after': {
    position: 'absolute',
    content: '""',
    top: '100%',
    right: 0,
    left: 0,
    height: 4,
    background: `linear-gradient(180deg, ${N40A} 0, ${N40A} 1px, ${N30A} 1px, transparent 4px)`,
  },
})
