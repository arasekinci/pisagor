import React, { HTMLAttributes } from 'react'

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Slot for the app switcher.
   */
  renderAppSwitcher?: React.ComponentType
  /**
   * Slot for the create call to action button.
   */
  renderCreate?: React.ComponentType
  /**
   * Slot for the help button.
   */
  renderHelp?: React.ComponentType
  /**
   * Slot for the product home logo which renders a product's brand.
   */
  renderLogo?: React.ComponentType
  /**
   * Slot for the primary actions.
   */
  renderMenu?: React.ComponentType
  /**
   * Slot for the notification button.
   */
  renderNotifications?: React.ComponentType
  /**
   * Slot for the profile button.
   */
  renderProfile?: React.ComponentType
  /**
   * Slot for the search textbox.
   */
  renderSearch?: React.ComponentType
  /**
   * Slot for the settings button.
   */
  renderSettings?: React.ComponentType
  /**
   * Slot for the sign in button.
   */
  renderSignIn?: React.ComponentType
  /**
    A `testId` prop is provided for specified elements,
    which is a unique string that appears as a data attribute `data-testid` in the rendered code,
    serving as a hook for automated tests.
   */
  testId?: string
}
