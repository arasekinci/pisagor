import { css } from '@emotion/css'
import { palette } from '@pisagor/core/tokens'

export const root = css({
  pointerEvents: 'none',
  position: 'absolute',
  width: 15,
  height: 15,
  right: -2,
  bottom: -2,
  borderRadius: '50%',
  border: `2px solid ${palette('neutral.0')}`,
  backgroundColor: palette('neutral.0'),
  boxSizing: 'border-box',
})
