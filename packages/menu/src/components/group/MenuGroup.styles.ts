import { css } from '@emotion/css'
import { N300, N30A } from '@pisagor/core/colors'

export const root = css({
  flexShrink: 1,
  padding: '6px 0',
  overflow: 'auto',
})

export const separator = css({
  borderTop: `2px solid ${N30A}`,
})

export const title = css({
  color: N300,
  fontSize: 11,
  fontWeight: 700,
  lineHeight: 1.45455,
  textTransform: 'uppercase',
  padding: '0px 20px',
  margin: '6px 0',
})
