import { css } from '@emotion/css'
import { font } from '@pisagor/core/tokens'

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
    color: font('error'),
  }),
  valid: css({
    color: font('success'),
  }),
  description: css({
    color: font('subtlest'),
  }),
}
