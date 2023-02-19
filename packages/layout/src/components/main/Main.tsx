import type { MainProps } from './Main.types'
import * as styles from './Main.styles'

export const Main: React.FunctionComponent<MainProps> = ({
  children,
  testId,
  ...rest
}) => {
  return (
    <div
      className={styles.root}
      data-testid={testId && `${testId}-main`}
      {...rest}
    >
      {children}
    </div>
  )
}
