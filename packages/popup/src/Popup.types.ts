import type { HTMLAttributes, ReactElement, ReactNode, Ref } from 'react'
import type { PopperPlacement, PopperPosition } from '@pisagor/popper'

export type PopupPlacement = PopperPlacement

export type PopupPosition = PopperPosition

export type PopupTriggerProps = {
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

export interface PopupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Id that is assigned to the popup container element.
   */
  id?: string
  /**
   * Used to either show or hide the popup.
   * When set to `false` popup will not render anything to the DOM.
   */
  isOpen: boolean
  /**
   * Render props for content that is displayed inside the popup.
   */
  children?: ReactNode
  /**
   * Distance the popup should be offset from the reference in the format of [along, away] (units in px).
   * Defaults to [0, 8] - which means the popup will be 8px away from the edge of the reference specified
   * by the `placement` prop.
   */
  offset?: [number, number]
  /**
   * The prop description will be added here.
   */
  position?: PopupPosition
  /**
   * Placement of where the popup should be displayed relative to the trigger element.
   */
  placement?: PopupPlacement
  /**
   * Controls whether the popup takes focus when opening.
   * This changes the `popupComponent` component tabIndex to `null`.
   * Defaults to `true`.
   */
  autoFocus?: boolean
  /**
   * A `testId` prop is provided for specified elements,
   * which is a unique string that appears as a data attribute `data-testid` in the rendered code,
   * serving as a hook for automated tests.
   */
  testId?: string
  /**
   * Render props used to anchor the popup to your content.
   * Make this an interactive element,
   * such as an `@atlaskit/button` component.
   */
  trigger(props: PopupTriggerProps): ReactElement
  /**
   * Handler that is called when the popup wants to close itself.
   * Generally this will be either when clicking away from the popup or pressing the escape key.
   * You'll want to use this to set open state accordingly and then pump it back into the `isOpen` prop.
   */
  onClose?(): void
}
