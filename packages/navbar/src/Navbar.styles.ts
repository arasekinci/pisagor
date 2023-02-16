import { css } from '@emotion/css'
import { background, font } from '@pisagor/core/tokens'

export const root = css({
  position: 'relative',
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 16,
  paddingRight: 16,
  color: font('subtle'),
  height: 'var(--navbarHeight, 0px)',
  boxSizing: 'border-box',
  backgroundColor: background(),

  '&::after': {
    position: 'absolute',
    content: '""',
    top: '100%',
    right: 0,
    left: 0,
    height: 4,
    background: `linear-gradient(180deg, ${background(
      'neutral'
    )} 0, ${background('neutral')} 1px, ${background(
      'neutral'
    )} 1px, transparent 4px)`,
  },
})
