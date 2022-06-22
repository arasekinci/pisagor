import Icon from '@pisagor/icon'

import type { NotificationsProps } from './Notifications.types'
import IconButton from '../icon-button'

export const Notifications: React.FunctionComponent<NotificationsProps> = ({
  testId,
  ...rest
}) => {
  return (
    <IconButton testId={testId && `${testId}-notifications`} {...rest}>
      <Icon name="notifications" />
    </IconButton>
  )
}
