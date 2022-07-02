import React, { Fragment } from 'react'
import { cx } from '@emotion/css'
import { useTheme } from '@pisagor/core'

import type { BreadcrumbsProps } from './Breadcrumbs.types'
import * as styles from './Breadcrumbs.styles'

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({
  children,
  className,
  label,
  separator = '/',
  testId,
  ...rest
}) => {
  const theme = useTheme()

  return (
    <nav
      className={cx(styles.nav(theme), className)}
      data-testid={testId}
      aria-label={label}
      tabIndex={-1}
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
