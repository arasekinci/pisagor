import Button from '@pisagor/button'

import type { CreateProps } from './Create.types'

export const Create: React.FunctionComponent<CreateProps> = ({
  appearance = 'info',
  testId,
  children,
  ...rest
}) => {
  return (
    <Button
      appearance={appearance}
      testId={testId && `${testId}-create`}
      {...rest}
    >
      {children}
    </Button>
  )
}
