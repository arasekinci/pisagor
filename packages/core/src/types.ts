import type { ReactNode } from 'react'
import type { AnchorProps } from '@pisagor/anchor'

export type Theme = {
  breadcrumbs: {
    color: string
    hoverColor: string
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
