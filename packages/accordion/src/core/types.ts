import type { ReactNode } from 'react'

export type AccordionContextValue = {
  state: string[]
  open(id: string): void
  close(id: string): void
}

export interface AccordionProviderProps {
  /**
   * A unique ID that will be used to generate IDs for accordion and accordion panels.
   * This is required for accessibility purposes.
   */
  id: string
  collapse: boolean
  children: ReactNode
}
