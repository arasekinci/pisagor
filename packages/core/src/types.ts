import type { ReactNode } from 'react'
import type { AnchorProps } from '@pisagor/anchor'

type AlertAppearance = {
  background: string

  icon: {
    color: string
  }
}

type BadgeAppearance = {
  color: string
  background: string
}

type ButtonAppearance = {
  color: string
  background: string

  active: {
    color: string
    background: string
  }

  hover: {
    color: string
    background: string
  }
}

// type CheckboxState = {
//   border: string
//   background: string
// }

export type Theme = {
  alert: {
    color: string

    default: AlertAppearance
    error: AlertAppearance
    help: AlertAppearance
    info: AlertAppearance
    success: AlertAppearance
    warning: AlertAppearance
  }
  badge: {
    default: BadgeAppearance
    error: BadgeAppearance
    help: BadgeAppearance
    info: BadgeAppearance
    success: BadgeAppearance
    warning: BadgeAppearance
  }
  blanket: {
    background: string
  }
  // checkbox: {
  //   border: string
  //   background: string
  //   active: CheckboxState
  //   checked: CheckboxState
  //   disabled: CheckboxState
  //   hover: CheckboxState
  // }
  breadcrumbs: {
    color: string

    hover: {
      color: string
    }
  }
  button: {
    default: ButtonAppearance
    error: ButtonAppearance
    help: ButtonAppearance
    info: ButtonAppearance
    success: ButtonAppearance
    warning: ButtonAppearance
  }
}

export type PisagorContextValue = {
  /**
   * The prop description will be added here.
   */
  link?(props: AnchorProps): JSX.Element
}

export interface PisagorProviderProps extends PisagorContextValue {
  /**
   * The prop description will be added here.
   */
  theme: Theme
  /**
   * The prop description will be added here.
   */
  children: ReactNode
}
