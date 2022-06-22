import type { ButtonItemProps } from './ButtonItem.types'
import * as Styles from './ButtonItem.styles'

export const ButtonItem: React.FunctionComponent<ButtonItemProps> = ({
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
