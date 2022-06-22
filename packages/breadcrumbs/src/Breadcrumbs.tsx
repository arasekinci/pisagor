import React from 'react'

import type { BreadcrumbsProps } from './Breadcrumbs.types'
import * as Styles from './Breadcrumbs.styles'

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({
  children,
  label,
  separator = '/',
  ...rest
}) => {
  return (
    <nav aria-label={label} {...rest}>
      <Styles.List {...rest}>
        {React.Children.map(children, (child, index) => (
          <React.Fragment key={index}>
            {child}
            {React.Children.count(children) > index + 1 ? (
              <Styles.Seperator aria-hidden="true">
                {separator}
              </Styles.Seperator>
            ) : null}
          </React.Fragment>
        ))}
      </Styles.List>
    </nav>
  )
}

export default Breadcrumbs
