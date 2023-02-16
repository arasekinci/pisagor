import type { HTMLAttributes } from 'react'

export interface FooProps extends HTMLAttributes<HTMLDivElement> {
  testId?: string
}
