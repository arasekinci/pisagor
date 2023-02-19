import type { LayoutProps } from './Layout.types'
import * as styles from './Layout.styles'

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  testId,
  ...rest
}) => {
  return (
    <div className={styles.root} data-testid={testId} {...rest}>
      {children}
    </div>
  )
}

export default Layout
