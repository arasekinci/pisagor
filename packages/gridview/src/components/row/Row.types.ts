import type { HTMLAttributes, ReactNode } from 'react'

export type RowAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch'

export type RowContent =
  | 'start'
  | 'center'
  | 'end'
  | 'around'
  | 'between'
  | 'evenly'

export type RowDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type RowWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

export type RowGutter = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'

export type RowJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'around'
  | 'between'
  | 'evenly'

export type RowObject = {
  /**
   * The prop description will be added here.
   */
  align?: RowAlign
  /**
   * The prop description will be added here.
   */
  content?: RowContent
  /**
   * The prop description will be added here.
   */
  direction?: RowDirection
  /**
   * The prop description will be added here.
   */
  gutter?: RowGutter
  /**
   * The prop description will be added here.
   */
  justify?: RowJustify
  /**
   * The prop description will be added here.
   */
  wrap?: RowWrap
}

export interface RowProps extends RowObject, HTMLAttributes<HTMLDivElement> {
  /**
   * The prop description will be added here.
   */
  xs?: RowObject
  /**
   * The prop description will be added here.
   */
  sm?: RowObject
  /**
   * The prop description will be added here.
   */
  md?: RowObject
  /**
   * The prop description will be added here.
   */
  lg?: RowObject
  /**
   * The prop description will be added here.
   */
  xl?: RowObject
  /**
   * The prop description will be added here.
   */
  children?: ReactNode
  /**
   * The prop description will be added here.
   */
  testId?: string
}
