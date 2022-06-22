import type { HeaderProps } from './Header.types'
import * as Styles from './Header.styles'

export const Header: React.FunctionComponent<HeaderProps> = ({
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
