import Icon from '@pisagor/icon'

import type { HelpProps } from './Help.types'
import IconButton from '../icon-button'

export const Help: React.FunctionComponent<HelpProps> = ({
  testId,
  ...rest
}) => {
  return (
    <IconButton testId={testId && `${testId}-help`} {...rest}>
      <Icon name="help" />
    </IconButton>
  )
}
