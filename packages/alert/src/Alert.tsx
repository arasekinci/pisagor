import React from 'react'
import { classnames } from 'begonya/functions'
import { useTheme } from '@pisagor/core'
import Icon from '@pisagor/icon'

import type { AlertProps } from './Alert.types'
import * as styles from './Alert.styles'

const Alert: React.FunctionComponent<AlertProps> = ({
  appearance = 'default',
  children,
  className,
  icon,
  testId,
  title,
  ...rest
}) => {
  const { alert } = useTheme()
  const classNames = classnames(
    styles.root,
    styles.appearance[appearance],
    className
  )

  const renderIcon = () => {
    if (icon) {
      return icon
    }

    switch (appearance) {
      case 'error':
        return <Icon name="error" color={alert.error.icon.color} />
      case 'help':
        return <Icon name="help" color={alert.help.icon.color} />
      case 'info':
        return <Icon name="info" color={alert.info.icon.color} />
      case 'success':
        return <Icon name="check_circle" color={alert.success.icon.color} />
      case 'warning':
        return <Icon name="warning" color={alert.warning.icon.color} />
      default:
        return <Icon name="message" color={alert.default.icon.color} />
    }
  }

  return (
    <section className={classNames} role="alert" data-testid={testId} {...rest}>
      {!icon && <div className={styles.icon}>{renderIcon()}</div>}
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <div>{children}</div>
      </div>
    </section>
  )
}

export default Alert
