import React, { Fragment } from 'react'
import { classnames } from 'begonya/functions'

import type { BreadcrumbsProps } from './breadcrumbs.types'
import * as styles from './breadcrumbs.styles'

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({
  children,
  className,
  label,
  separator = '/',
  testId,
  ...rest
}) => {
  const classNames = classnames(styles.nav, className)

  return (
    <nav
      className={classNames}
      aria-label={label}
      tabIndex={-1}
      data-testid={testId}
      {...rest}
    >
      <ol className={styles.list}>
        {React.Children.map(children, (child, index) => (
          <Fragment key={index}>
            {index ? (
              <li className={styles.seperator} aria-hidden="true">
                {separator}
              </li>
            ) : null}
            {child}
          </Fragment>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
