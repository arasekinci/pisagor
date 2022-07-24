import Icon from '@pisagor/icon'

import type { AppSwitcherProps } from './AppSwitcher.types'
import IconButton from '../icon-button'

export const AppSwitcher: React.FunctionComponent<AppSwitcherProps> = ({
  testId,
  ...rest
}) => {
  return (
    <IconButton testId={testId && `${testId}-app-switcher`} {...rest}>
      <Icon name="apps" />
    </IconButton>
  )
}
