import { css } from '@emotion/css'
import { background, border } from '@pisagor/core/tokens'

export const root = css({
  display: 'block',
  padding: '12px 16px',
  marginTop: -1,
  border: `1px solid ${border()}`,
  backgroundColor: background(),

  '&[aria-hidden="true"]': {
    display: 'none',
  },
})
