export type TokenGroup =
  | 'background'
  | 'border'
  | 'color'
  | 'font'
  | 'icon'
  | 'layer'
  | 'shadow'

export type TokenState = 'on' | 'hover' | 'active' | 'focus' | 'disabled'

export type LayerToken = {
  name: string
  value: number
  attributes: {
    group: TokenGroup
    state: TokenState
    description: string
  }
}

export type Token = {
  name: string
  value: string
  attributes: {
    group: TokenGroup
    state: TokenState
    description: string
  }
}
