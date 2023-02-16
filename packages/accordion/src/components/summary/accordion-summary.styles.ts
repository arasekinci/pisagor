import { css } from '@emotion/css'
import { background, border } from '@pisagor/core/tokens'

export const root = css({
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 16px',
  backgroundColor: background('accent.neutral.lighter'),
  border: `1px solid ${border()}`,
})
