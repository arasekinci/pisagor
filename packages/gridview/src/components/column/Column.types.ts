import type { HTMLAttributes, ReactNode } from 'react'

export type ColumnAlign = 'start' | 'center' | 'end'

export type ColumnOrder = 'first' | 'last'

export type ColumnOffset = number

export type ColumnSize = number

export interface ColumnObject {
  /**
   * The prop description will be added here.
   */
  align?: ColumnAlign
  /**
   * The prop description will be added here.
   */
  offset?: ColumnOffset
  /**
   * The prop description will be added here.
   */
  order?: ColumnOrder
  /**
   * The prop description will be added here.
   */
  size?: ColumnSize
}

export interface ColumnProps
  extends ColumnObject,
    HTMLAttributes<HTMLDivElement> {
  /**
   * The prop description will be added here.
   */
  xs?: ColumnObject
  /**
   * The prop description will be added here.
   */
  sm?: ColumnObject
  /**
   * The prop description will be added here.
   */
  md?: ColumnObject
  /**
   * The prop description will be added here.
   */
  lg?: ColumnObject
  /**
   * The prop description will be added here.
   */
  xl?: ColumnObject
  /**
   * The prop description will be added here.
   */
  children?: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
