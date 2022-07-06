import { css } from '@emotion/css'

import { sizes } from './core/constants'
import type { IconSize } from './Icon.types'

export const root = css({
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

export const size = (size: IconSize) =>
  css({
    fontSize: typeof size === 'number' ? size : sizes[size],
  })
