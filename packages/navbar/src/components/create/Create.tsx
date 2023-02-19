import Button from '@pisagor/button'

import type { CreateProps } from './Create.types'

export const Create: React.FunctionComponent<CreateProps> = ({
  status = 'info',
  testId,
  children,
  ...rest
}) => {
  return (
    <Button status={status} testId={testId && `${testId}-create`} {...rest}>
      {children}
    </Button>
  )
}
