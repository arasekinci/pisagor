import Icon from '@pisagor/icon'

import type { SettingsProps } from './Settings.types'
import IconButton from '../icon-button'

export const Settings: React.FunctionComponent<SettingsProps> = ({
  testId,
  ...rest
}) => {
  return (
    <IconButton testId={testId && `${testId}-settigns`} {...rest}>
      <Icon name="settings" />
    </IconButton>
  )
}
