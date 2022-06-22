import Icon from '@pisagor/icon'

import type { ProfileProps } from './Profile.types'
import IconButton from '../icon-button'

export const Profile: React.FunctionComponent<ProfileProps> = ({
  testId,
  ...rest
}) => {
  return (
    <IconButton testId={testId && `${testId}-profile`} {...rest}>
      <Icon name="account_circle" />
    </IconButton>
  )
}
