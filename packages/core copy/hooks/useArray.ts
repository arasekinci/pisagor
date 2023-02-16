import { useMemo, useState } from 'react'

type ArrayActions<T> = {
  add: (item: T) => void
  update: (index: number, item: T) => void
  remove: (index: number) => void
  clear: () => void
}

export function useArray<T>(initialState: T[] = []): [T[], ArrayActions<T>] {
  const [state, setState] = useState<T[]>(initialState)

  const actions = useMemo<ArrayActions<T>>(
    () => ({
      add: (item: T) => {
        setState((prevState) => [...prevState, item])
      },

      remove: (index: number) => {
        setState((prevState) => prevState.filter((value, i) => i !== index))
      },

      update: (index: number, value: T) => {
        setState((prevState) =>
          prevState.map((val, i) => (i === index ? value : val))
        )
      },

      clear: () => {
        setState([])
      },
    }),
    []
  )

  return [state, actions]
}
