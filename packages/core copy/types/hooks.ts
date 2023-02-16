export type KeyboardState = {
  key: string
  alt: boolean
  ctrl: boolean
  meta: boolean
  shift: boolean
}

export type KeyboardCallback = (
  event: KeyboardEvent,
  state: KeyboardState
) => void

export type KeyboardArguments = {
  type: 'keydown' | 'keypress' | 'keyup'
  keys?: string[]
  options?: boolean | AddEventListenerOptions
  callback: KeyboardCallback
}
