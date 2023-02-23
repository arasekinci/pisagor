import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

import type { AlertColor } from './alert.types'

export const appearance = (color: AlertColor, accent: boolean) => {
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

export const root = css({
  display: 'flex',
  padding: 16,
  borderRadius: 3,
})

export const icon = css({
  flex: '0 0 40px',
})

export const content = css({
  flex: 1,
  wordBreak: 'break-word',
})

export const title = css({
  color: 'inherit',
  fontSize: '1.14286em',
  lineHeight: 1.25,
  fontWeight: 600,
  margin: '0 0 8px 0',
  letterSpacing: '-0.006em',
})
