import React, { useCallback, useContext, useState } from 'react'

import type { AccordionContextValue, AccordionProviderProps } from './types'

export const AccordionContext =
  React.createContext<AccordionContextValue | null>(null)

export const AccordionProvider: React.FunctionComponent<
  AccordionProviderProps
> = ({ children, collapse }) => {
  const [expanded, setExpanded] = useState<string[]>([])

  const open = useCallback(
    (id: string) => {
      setExpanded((state) => {
        if (collapse) {
          return [...state, id]
        }

        return [id]
      })
    },
    [collapse]
  )

  const close = useCallback((id: string) => {
    setExpanded((state) => {
      return state.filter((predicate) => predicate !== id)
    })
  }, [])

  return (
    <AccordionContext.Provider
      value={{
        state: expanded,
        open,
        close,
      }}
    >
      {children}
    </AccordionContext.Provider>
  )
}

export const useAccordion = (): AccordionContextValue => {
  const accordion = useContext(AccordionContext)

  if (accordion) {
    // accordion.expanded = accordion.state.includes(id)

    return accordion
  }

  throw new Error('accordion: useAccordion must be used within a Accordion.')
  // throw new Error(
  //   '@pisagor/accordion: A AccordionSummary must have a Accordion parent.'
  // )
}
