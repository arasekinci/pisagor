import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const root = css({
  display: 'block',
  padding: '12px 16px',
  borderTop: `1px solid ${token('border')}`,
  backgroundColor: token('background'),

  '&[aria-hidden="true"]': {
    display: 'none',
  },
})
