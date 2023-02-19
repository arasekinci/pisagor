import type { IconButtonProps } from './IconButton.types'
import * as styles from './IconButton.styles'

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  children,
  testId,
  ...rest
}) => {
  return (
    <button
      className={styles.root}
      data-testid={testId}
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}

export default IconButton
