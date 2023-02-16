import { css } from '@emotion/css'
import { icon } from '@pisagor/core/tokens'

import { sizes } from './core/constants'
import type { IconAppearance, IconColor, IconSize } from './icon.types'

export const root = css({
  color: icon(),
  fontFamily: 'Material Icons',
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 1,
  letterSpacing: 'normal',
  textTransform: 'none',
  display: 'inline-block',
  whiteSpace: 'nowrap',
  wordWrap: 'normal',
  direction: 'ltr',
  WebkitFontFeatureSettings: 'liga',
  WebkitFontSmoothing: 'antialiased',
})

export const appearance = (str: IconAppearance) =>
  css({
    color: icon(str),
  })

export const color = (str: IconColor) =>
  css({
    color: icon(`accent.${str}`),
  })

export const size = (size: IconSize) =>
  css({
    fontSize: typeof size === 'number' ? size : sizes[size],
  })
