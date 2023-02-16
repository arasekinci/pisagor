import type { IconToken } from '../types'
import { TOKEN_NOT_FOUND } from '../constants'

const tokens: Record<`$.${IconToken}`, string> = {
  '$.accent.blue.light': 'var(--B500)',
  '$.accent.blue': 'var(--B700)',
  '$.accent.blue.dark': 'var(--B900)',
  '$.accent.green.light': 'var(--G500)',
  '$.accent.green': 'var(--G700)',
  '$.accent.green.dark': 'var(--G900)',
  '$.accent.magenta.light': 'var(--M500)',
  '$.accent.magenta': 'var(--M700)',
  '$.accent.magenta.dark': 'var(--M900)',
  '$.accent.neutral.light': 'var(--N500)',
  '$.accent.neutral': 'var(--N700)',
  '$.accent.neutral.dark': 'var(--N900)',
  '$.accent.orange.light': 'var(--O500)',
  '$.accent.orange': 'var(--O700)',
  '$.accent.orange.dark': 'var(--O900)',
  '$.accent.purple.light': 'var(--P500)',
  '$.accent.purple': 'var(--P700)',
  '$.accent.purple.dark': 'var(--P900)',
  '$.accent.red.light': 'var(--R500)',
  '$.accent.red': 'var(--R700)',
  '$.accent.red.dark': 'var(--R900)',
  '$.accent.teal.light': 'var(--T500)',
  '$.accent.teal': 'var(--T700)',
  '$.accent.teal.dark': 'var(--T900)',
  '$.accent.yellow.light': 'var(--Y500)',
  '$.accent.yellow': 'var(--Y700)',
  '$.accent.yellow.dark': 'var(--Y900)',

  '$.error': 'var(--R700)',
  '$.help': 'var(--P700)',
  '$.info': 'var(--B700)',
  '$.neutral': 'var(--N700)',
  '$.success': 'var(--G700)',
  '$.warning': 'var(--Y700)',

  '$.inverse': 'var(--N0)',
  '$.default': 'var(--N800)',
}

export function icon(name: IconToken = 'default') {
  return tokens[`$.${name}`] || TOKEN_NOT_FOUND
}
