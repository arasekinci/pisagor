import type { HTMLAttributes } from 'react'

export interface AccordionSummaryProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A `testId` prop is a unique string that appears as a data attribute `data-testid`
   * on the `Accordion` element, serving as a hook for automated tests.
   */
  testId?: string
}
