import { css } from '@emotion/css'
import { font } from '@pisagor/core/tokens'

export const root = css({
  color: font('subtlest'),
  fontSize: '0.857143em',
  fontWeight: 600,
  display: 'block',
  lineHeight: 1.33333,
  marginBottom: 4,
})

export const required = css({
  color: font('error'),
  paddingLeft: 2,
})
