import { useEffect, useRef } from 'react'

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
