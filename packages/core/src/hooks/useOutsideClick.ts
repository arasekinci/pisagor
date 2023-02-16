import React, { useEffect } from 'react'

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
