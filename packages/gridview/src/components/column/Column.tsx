import { classnames } from 'begonya/functions'

import type { ColumnProps, ColumnObject } from './Column.types'

export const Column: React.FunctionComponent<ColumnProps> = ({
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  align,
  offset,
  order,
  size,
  children,
  testId,
  ...rest
}): JSX.Element => {
  const classNames = ['col']

  const createClassName = (breakpoint: string, props: ColumnObject = {}) => {
    for (const prop in props) {
      const value = props[prop as keyof ColumnObject]

      if (value !== undefined) {
        if (prop === 'size') {
          classNames.push(`col${breakpoint}-${value}`)
        } else {
          classNames.push(`col${breakpoint}-${prop}-${value}`)
        }
      }
    }
  }

  createClassName('', { size, offset, align, order })
  createClassName('-xs', xs)
  createClassName('-sm', sm)
  createClassName('-md', md)
  createClassName('-lg', lg)
  createClassName('-xl', xl)

  return (
    <div
      className={classnames(...classNames, className)}
      data-testid={testId}
      {...rest}
    >
      {children}
    </div>
  )
}
