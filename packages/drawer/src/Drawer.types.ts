import type { ReactElement, ReactNode } from 'react'

export type DrawerPosition = 'top' | 'right' | 'bottom' | 'left'

export type DrawerSize = 'extended' | 'full' | 'medium' | 'narrow' | 'wide'

export interface DrawerProps {
  /**
   * The prop description will be added here.
   */
  position?: DrawerPosition
  /**
   * The prop description will be added here.
   */
  size?: DrawerSize
  /**
   * The prop description will be added here.
   */
  className?: string
  /**
   * Controls if the drawer is open or closed.
   */
  isOpen: boolean
  /**
   * Icon to be rendered in your drawer as a component, if available.
   */
  icon?: ReactElement
  /**
   * The prop description will be added here.
   */
  actions?: ReactElement
  /**
   * The content of the drawer.
   */
  children?: ReactNode
  /**
   * A unique hook to be used for testing.
   */
  testId?: string
  /**
   * Callback function called when the drawer is closed.
   */
  onClose?(): void
  /**
   * Callback function called while the drawer is displayed and `keydown` event is triggered.
   */
  onKeyDown?(event: KeyboardEvent): void
  /**
   * A callback function that will be called when the drawer has finished its opening transition.
   */
  onOpenComplete?(): void
  /**
   * A callback function that will be called when the drawer has finished its close transition.
   */
  onCloseComplete?(): void
}
