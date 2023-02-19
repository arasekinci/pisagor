import type { SidebarProps } from './Sidebar.types'
import * as styles from './Sidebar.styles'

const Sidebar: React.FunctionComponent<SidebarProps> = ({
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

export default Sidebar
