import type { FooterProps } from './Footer.types'
import * as styles from './Footer.styles'

export const Footer: React.FunctionComponent<FooterProps> = ({
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
