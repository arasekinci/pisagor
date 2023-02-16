import type { ShadowToken } from '../types'
import { TOKEN_NOT_FOUND } from '../constants'

const tokens: Record<`$.${ShadowToken}`, string> = {
  '$.overlay': 'var(--shadow-overlay)',
  '$.default': 'var(--shadow)',
}

export function shadow(name: ShadowToken = 'default') {
  return tokens[`$.${name}`] || TOKEN_NOT_FOUND
}
