import React, { useEffect } from 'react'

/**
 * A React Hook that sets up a click event listener for the document to detect outside clicks of a specified element.
 *
 * @param ref - The ref object created by a useRef function call.
 * @param callback - A callback function to be called when an outside click is detected.
 */

export function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: (event: MouseEvent) => void
): void {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      callback(event)
    }

    document.addEventListener('click', listener)

    return () => {
      document.removeEventListener('click', listener)
    }
  }, [ref, callback])
}
