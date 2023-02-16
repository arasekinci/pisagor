import type { HTMLAttributes } from 'react'

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The index of the accordion that will be selected by default when the component mounts.
   */
  defaultExpanded?: number
  /**
   * Controls whether other content is hidden when the component is inserted.
   */
  collapse?: boolean
  /**
   * A unique ID that will be used to generate IDs for accordion and accordion panels.
   * This is required for accessibility purposes.
   */
  id: string
  /**
   * A `testId` prop is a unique string that appears as a data attribute `data-testid`
   * on the `Accordion` element, serving as a hook for automated tests.
   */
  testId?: string
}
