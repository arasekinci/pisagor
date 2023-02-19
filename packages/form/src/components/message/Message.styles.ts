import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

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
    color: token('font.status.error'),
  }),
  valid: css({
    color: token('font.status.success'),
  }),
  description: css({
    color: token('font.subtlest'),
  }),
}
