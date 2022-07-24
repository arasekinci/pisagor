import { cx } from '@emotion/css'

import type { NavbarProps } from './Navbar.types'
import * as styles from './Navbar.styles'

const Navbar: React.FunctionComponent<NavbarProps> = ({
  children,
  className,
  testId,
  ...rest
}) => {
  const classNames = cx(styles.root, className)

  return (
    <header className={classNames} role="banner" data-testid={testId} {...rest}>
      {children}
    </header>
  )
}

export default Navbar
