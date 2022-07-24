import type { HTMLAttributes, ReactElement, ReactNode, Ref } from 'react'
import type { PopperPlacement, PopperPosition } from '@pisagor/popper'

export type TooltipPlacement = PopperPlacement

export type TooltipPosition = PopperPosition

export type TooltipTriggerProps = {
  /**
   * The prop description will be added here.
   */
  ref: Ref<any>
  /**
   * The prop description will be added here.
   */
  'aria-controls'?: string
  /**
   * The prop description will be added here.
   */
  'aria-expanded': boolean
  /**
   * The prop description will be added here.
   */
  'aria-haspopup': boolean
}

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Render props for content that is displayed inside the popup.
   */
  children?: ReactElement
  /**
   * The prop description will be added here.
   */
  content?: ReactNode
  /**
   * Placement of where the popup should be displayed relative to the trigger element.
   */
  placement?: TooltipPlacement
  /**
   * A `testId` prop is provided for specified elements,
   * which is a unique string that appears as a data attribute `data-testid` in the rendered code,
   * serving as a hook for automated tests.
   */
  testId?: string
}
