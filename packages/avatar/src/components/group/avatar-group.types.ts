import type { HTMLAttributes } from 'react'

export interface AvatarGroupProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * A `testId` prop is provided for specified elements, which is a unique string that
   * appears as a data attribute `data-testid` in the rendered code,
   * serving as a hook for automated tests.
   */
  testId?: string
}
