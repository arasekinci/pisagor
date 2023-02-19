import type { PageProps } from './Page.types'
import * as styles from './Page.styles'

const Page: React.FunctionComponent<PageProps> = ({
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

export default Page
