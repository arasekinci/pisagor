import React from 'react'
import { classnames } from 'begonya/functions'

import type { MenuProps } from './Menu.types'
import * as styles from './Menu.styles'

const Menu: React.FunctionComponent<MenuProps> = ({
  children,
  className,
  testId,
  ...rest
}) => {
  const classNames = classnames(styles.root, className)

  return (
    <div className={classNames} data-testid={testId} {...rest}>
      {children}
    </div>
  )
}

export default Menu
