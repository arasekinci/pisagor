import type { LayerToken } from '../types'
import { TOKEN_NOT_FOUND } from '../constants'

const tokens: Record<`$.${LayerToken}`, number> = {
  '$.card': 100,
  '$.navigation': 200,
  '$.dialog': 300,
  '$.layer': 400,
  '$.blanket': 500,
  '$.modal': 510,
  '$.flag': 600,
  '$.spotlight': 700,
  '$.tooltip': 800,
}

export function layer(name: LayerToken) {
  return tokens[`$.${name}`] || TOKEN_NOT_FOUND
}
