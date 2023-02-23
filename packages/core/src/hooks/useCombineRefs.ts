import type React from 'react'

/**
 * useCombineRefs is a React hook for combining multiple refs into one.
 *
 * @return A single ref callback that assigns each of the provided refs in order with the passed value when invoked.
 */

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
