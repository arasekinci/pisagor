import type { ReactNode } from 'react'

export type VoidFunction = () => void

export type RecursivePartial<T> = {
  [P in keyof T]?: Partial<T[P]>
}

export type RecursiveRequired<T> = {
  [P in keyof T]: Required<T[P]>
}

export type ChangeChildrenProp<T> = Omit<T, 'children'> & {
  content?: ReactNode
}
