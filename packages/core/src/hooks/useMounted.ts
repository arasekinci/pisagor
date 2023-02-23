import { useEffect, useRef } from 'react'

/**
 * Custom hook to detect if a component is mounted or not.
 *
 * @returns true if the component is mounted, false otherwise.
 */

export function useMounted(): boolean {
  const mounted = useRef<boolean>(false)

  useEffect(() => {
    mounted.current = true

    return function cleanup() {
      mounted.current = false
    }
  }, [])

  return mounted.current
}
