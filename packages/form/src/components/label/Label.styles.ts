import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const root = css({
  color: token('font.subtlest'),
  fontSize: '0.857143em',
  fontWeight: 600,
  display: 'block',
  lineHeight: 1.33333,
  marginBottom: 4,
})

export const required = css({
  color: token('font.status.error'),
  paddingLeft: 2,
})
