import type { IconButtonProps } from './IconButton.types'
import * as Styled from './IconButton.styles'

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  children,
  testId,
  ...rest
}) => {
  return (
    <Styled.Root data-testid={testId} type="button" {...rest}>
      {children}
    </Styled.Root>
  )
}

export default IconButton
