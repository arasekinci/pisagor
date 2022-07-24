import type { CreateProps } from './Create.types'
import IconButton from '../icon-button'

export const Create: React.FunctionComponent<CreateProps> = ({
  testId,
  ...rest
}) => {
  return (
    <IconButton testId={testId && `${testId}-create`} {...rest}>
      1
    </IconButton>
  )
}
