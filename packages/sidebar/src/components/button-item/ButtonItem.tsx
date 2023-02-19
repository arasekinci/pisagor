import type { ButtonItemProps } from './ButtonItem.types'
import * as styles from './ButtonItem.styles'

export const ButtonItem: React.FunctionComponent<ButtonItemProps> = ({
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
