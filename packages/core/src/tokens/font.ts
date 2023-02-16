import type { FontToken } from '../types'
import { TOKEN_NOT_FOUND } from '../constants'

const tokens: Record<`$.${FontToken}`, string> = {
  '$.accent.blue.light': 'var(--B600)',
  '$.accent.blue': 'var(--B800)',
  '$.accent.blue.dark': 'var(--B1000)',
  '$.accent.green.light': 'var(--G600)',
  '$.accent.green': 'var(--G800)',
  '$.accent.green.dark': 'var(--G1000)',
  '$.accent.magenta.light': 'var(--M600)',
  '$.accent.magenta': 'var(--M800)',
  '$.accent.magenta.dark': 'var(--M1000)',
  '$.accent.neutral.light': 'var(--N600)',
  '$.accent.neutral': 'var(--N800)',
  '$.accent.neutral.dark': 'var(--N1000)',
  '$.accent.orange.light': 'var(--O600)',
  '$.accent.orange': 'var(--O800)',
  '$.accent.orange.dark': 'var(--O1000)',
  '$.accent.purple.light': 'var(--P600)',
  '$.accent.purple': 'var(--P800)',
  '$.accent.purple.dark': 'var(--P1000)',
  '$.accent.red.light': 'var(--R600)',
  '$.accent.red': 'var(--R800)',
  '$.accent.red.dark': 'var(--R1000)',
  '$.accent.teal.light': 'var(--T600)',
  '$.accent.teal': 'var(--T800)',
  '$.accent.teal.dark': 'var(--T1000)',
  '$.accent.yellow.light': 'var(--Y600)',
  '$.accent.yellow': 'var(--Y800)',
  '$.accent.yellow.dark': 'var(--Y1000)',

  '$.error': 'var(--R800)',
  '$.help': 'var(--P800)',
  '$.info': 'var(--B800)',
  '$.neutral': 'var(--N800)',
  '$.success': 'var(--G800)',
  '$.warning': 'var(--Y800)',

  '$.text:disabled': 'var(--N400A)',
  '$.text': 'var(--N1000)',
  '$.text.inverse': 'var(--N0)',
  '$.subtle': 'var(--N900)',
  '$.subtle.inverse': 'var(--N100)',
  '$.subtlest': 'var(--N700)',
  '$.subtlest.inverse': 'var(--N400)',
}

export function font(name: FontToken) {
  return tokens[`$.${name}`] || TOKEN_NOT_FOUND
}
