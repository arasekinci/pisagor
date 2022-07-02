import { css } from '@emotion/css'
import { N200, R400 } from '@pisagor/core/colors'

export const root = css({
  color: N200,
  fontSize: '0.857143em',
  fontWeight: 600,
  display: 'block',
  lineHeight: 1.33333,
  marginBottom: 4,
})

export const required = css({
  color: R400,
  paddingLeft: 2,
})
