import type { HeaderProps } from './Header.types'
import * as styles from './Header.styles'

export const Header: React.FunctionComponent<HeaderProps> = ({
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
