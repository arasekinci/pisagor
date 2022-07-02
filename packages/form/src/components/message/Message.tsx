import { cx } from '@emotion/css'
import Icon from '@pisagor/icon'

import type { MessageProps } from './Message.types'
import * as styles from './Message.styles'

export const Message: React.FunctionComponent<MessageProps> = ({
  type = 'description',
  children,
  className,
  testId,
  ...rest
}) => {
  const classNames = cx(styles.root, styles.types[type], className)

  const renderIcon = () => {
    switch (type) {
      case 'invalid':
        return <Icon name="cancel" size="xsmall" />
      case 'valid':
        return <Icon name="check_circle" size="xsmall" />
    }
  }

  return (
    <div
      className={classNames}
      data-testid={testId && `${testId}-message`}
      {...rest}
    >
      {renderIcon()}
      {children}
    </div>
  )
}
