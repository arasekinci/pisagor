import type { SidebarProps } from './Sidebar.types'
import * as Styles from './Sidebar.styles'

const Sidebar: React.FunctionComponent<SidebarProps> = ({
  children,
  testId,
  ...rest
}) => {
  return (
    <Styles.Root data-testid={testId} {...rest}>
      {children}
    </Styles.Root>
  )
}

export default Sidebar
