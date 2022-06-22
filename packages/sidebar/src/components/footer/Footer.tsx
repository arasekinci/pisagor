import type { FooterProps } from './Footer.types'
import * as Styles from './Footer.styles'

export const Footer: React.FunctionComponent<FooterProps> = ({
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
