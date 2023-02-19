import type React from 'react'

export function useCombineRefs<T = HTMLElement>(
  ...refs: Array<React.RefCallback<T> | React.MutableRefObject<T> | null>
): React.RefCallback<T> {
  return (value: T) => {
    for (const ref of refs) {
      if (ref) {
        if (typeof ref === 'function') {
          ref(value)
        } else {
          ref.current = value
        }
      }
    }
  }
}
