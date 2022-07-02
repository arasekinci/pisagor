import { css } from '@emotion/css'
import { N200, R400, G400 } from '@pisagor/core/colors'

export const root = css({
  fontSize: '0.857143em',
  lineHeight: 1.33333,
  display: 'flex',
  fontWeight: 'normal',
  marginTop: 4,

  span: {
    marginRight: 4,
  },
})

export const types = {
  invalid: css({
    color: R400,
  }),
  valid: css({
    color: G400,
  }),
  description: css({
    color: N200,
  }),
}
