import { classnames } from 'begonya/functions'

import type { RowProps, RowObject } from './Row.types'

export const Row: React.FunctionComponent<RowProps> = ({
  className,
  xs,
  sm,
  md,
  lg,
  xl,
  align,
  content,
  direction,
  gutter,
  justify,
  wrap,
  children,
  testId,
  ...rest
}): JSX.Element => {
  const classNames: Record<string, string | undefined> = {
    'row-align': align,
    'row-content': content,
    'row-direction': direction,
    'row-gutter': gutter,
    'row-justify': justify,
    'row-wrap': wrap,
  }

  const createClassName = (breakpoint: string, props: RowObject = {}) => {
    for (const prop in props) {
      const value = props[prop as keyof RowObject]

      if (value) {
        classNames[`row-${breakpoint}-${prop}`] = value
      }
    }
  }

  createClassName('xs', xs)
  createClassName('sm', sm)
  createClassName('md', md)
  createClassName('lg', lg)
  createClassName('xl', xl)

  return (
    <div
      className={classnames('row', classNames, className)}
      data-testid={testId}
      {...rest}
    >
      {children}
    </div>
  )
}
