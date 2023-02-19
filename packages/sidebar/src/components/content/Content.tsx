import type { ContentProps } from './Content.types'
import * as styles from './Content.styles'

export const Content: React.FunctionComponent<ContentProps> = ({
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
