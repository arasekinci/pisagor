import { useEffect, useRef } from 'react'

import type { VoidFunction } from '../types'

export const useInterval = (callback: VoidFunction, ms = 1000) => {
  const handler = useRef(callback)

  useEffect(() => {
    if (ms >= 0) {
      const interval = setInterval(handler.current, ms)

      return function cleanup() {
        clearInterval(interval)
      }
    }
  }, [ms])
}
