import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

import type { BadgeColor } from './badge.types'

export const appearance = (color: BadgeColor, accent: boolean) => {
  if (accent) {
    return css({
      color: token('font.text.inverse'),
      backgroundColor: token(`background.accent.${color}.bold`),
    })
  }

  return css({
    color: token('font.text'),
    backgroundColor: token(`background.accent.${color}`),
  })
}

export const text = css({
  fontSize: 12,
  lineHeight: 1,
  fontWeight: 'normal',
  textAlign: 'center',
  display: 'inline-block',
  verticalAlign: 'middle',
  padding: '2px 6px',
  borderRadius: 10,
})

export const icon = css({
  verticalAlign: 'middle',
  padding: 2,
  borderRadius: '50%',
})
