import type { HTMLAttributes, ReactNode, RefObject } from 'react'
import type { Placement, PositioningStrategy } from '@popperjs/core'

export type PopperPosition = PositioningStrategy

export type PopperPlacement = Placement

export type PopperOffset = [number, number]

// export type PopperTriggerProps<T = HTMLButtonElement> = {
//   /**
//    * The prop description will be added here.
//    */
//   ref: Ref<T>
// }

export interface PopperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Returns the element to be positioned.
   */
  children?: ReactNode
  /**
   * Distance the popup should be offset from the reference in the format of [along, away] (units in px).
   * Defaults to [0, 8] - which means the popup will be 8px away from the edge of the reference specified
   * by the `placement` prop.
   */
  offset?: PopperOffset
  /**
   * Placement of where the popup should be displayed relative to the trigger element.
   */
  placement?: PopperPlacement
  /**
   * The prop description will be added here.
   */
  position?: PopperPosition
  /**
   * The prop description will be added here.
   */
  className?: string

  /**
   * The prop description will be added here.
   */
  testId?: string
  /**
   * The prop description will be added here.
   */
  triggerRef: RefObject<any>
  /**
   * The prop description will be added here.
   */
  // trigger?(props: PopperTriggerProps): ReactElement
}
