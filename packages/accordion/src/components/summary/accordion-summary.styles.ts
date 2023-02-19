import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const root = css({
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 16px',
  backgroundColor: token('background.accent.neutral'),
  border: `1px solid ${token('border')}`,
})
