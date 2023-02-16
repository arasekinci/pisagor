import type { ReactNode } from 'react'
import type { AnchorProps } from '@pisagor/anchor'

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
  mode?: 'dark' | 'light' | 'auto'
  /**
   * The prop description will be added here.
   */
  children: ReactNode
}
