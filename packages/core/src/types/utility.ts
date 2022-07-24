import type { ReactNode } from 'react'

export type VoidFunction = () => void

export type ChangeChildrenProp<T> = Omit<T, 'children'> & {
  content?: ReactNode
}
