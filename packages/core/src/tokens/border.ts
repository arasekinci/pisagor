import type { BorderToken } from '../types'
import { TOKEN_NOT_FOUND } from '../constants'

const tokens: Record<`$.${BorderToken}`, string> = {
  '$.accent.blue': 'var(--B600)',
  '$.accent.blue.light': 'var(--B400)',
  '$.accent.blue.dark': 'var(--B800)',
  '$.accent.green': 'var(--G600)',
  '$.accent.green.light': 'var(--G400)',
  '$.accent.green.dark': 'var(--G800)',
  '$.accent.magenta': 'var(--M600)',
  '$.accent.magenta.light': 'var(--M400)',
  '$.accent.magenta.dark': 'var(--M800)',
  '$.accent.neutral': 'var(--N600)',
  '$.accent.neutral.light': 'var(--N400)',
  '$.accent.neutral.dark': 'var(--N800)',
  '$.accent.orange': 'var(--O600)',
  '$.accent.orange.light': 'var(--O400)',
  '$.accent.orange.dark': 'var(--O800)',
  '$.accent.purple': 'var(--P600)',
  '$.accent.purple.light': 'var(--P400)',
  '$.accent.purple.dark': 'var(--P800)',
  '$.accent.red': 'var(--R600)',
  '$.accent.red.light': 'var(--R400)',
  '$.accent.red.dark': 'var(--R800)',
  '$.accent.teal': 'var(--T600)',
  '$.accent.teal.light': 'var(--T400)',
  '$.accent.teal.dark': 'var(--T800)',
  '$.accent.yellow': 'var(--Y600)',
  '$.accent.yellow.light': 'var(--Y400)',
  '$.accent.yellow.dark': 'var(--Y800)',

  '$.error': 'var(--R600)',
  '$.help': 'var(--P600)',
  '$.info': 'var(--B600)',
  '$.neutral': 'var(--N600)',
  '$.success': 'var(--G600)',
  '$.warning': 'var(--Y600)',

  '$.disabled': 'var(--N200A)',
  '$.focus': 'var(--B500)',
  '$.active': 'var(--B700)',
  '$.bold': 'var(--N600)',
  '$.input': 'var(--N300A)',

  '$.default': 'var(--N300A)',
}

export function border(name: BorderToken = 'default') {
  return tokens[`$.${name}`] || TOKEN_NOT_FOUND
}
