import { useEffect, useRef } from 'react'

import type { KeyboardArguments, KeyboardState } from '../types/hooks'

export function useKeyboard({
  type,
  keys = [],
  options,
  callback,
}: KeyboardArguments): void {
  const handler = useRef(callback)

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      const key = event.key.replace(/ /g, 'Space')
      const state: KeyboardState = {
        key: key,
        ctrl: event.ctrlKey,
        alt: event.altKey,
        shift: event.shiftKey,
        meta: event.metaKey,
      }

      if (keys.length) {
        if (keys.includes(key)) {
          handler.current(event, state)
        }
      } else {
        handler.current(event, state)
      }
    }

    window.addEventListener(type, listener, options)

    return function cleanup() {
      window.removeEventListener(type, listener)
    }
  }, [keys, options, type])
}
