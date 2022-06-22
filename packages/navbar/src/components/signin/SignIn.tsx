import Icon from '@pisagor/icon'

import type { SignInProps } from './SignIn.types'
import IconButton from '../icon-button'

export const SignIn: React.FunctionComponent<SignInProps> = ({
  testId,
  ...rest
}) => {
  return (
    <IconButton testId={testId && `${testId}-signin`} {...rest}>
      <Icon name="login" />
    </IconButton>
  )
}
