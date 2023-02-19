import type { SectionProps } from './Section.types'
import * as styles from './Section.styles'

export const Section: React.FunctionComponent<SectionProps> = ({
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
