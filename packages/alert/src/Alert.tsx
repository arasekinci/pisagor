import React from 'react'
import { classnames } from 'begonya/functions'
import { convertStatusNameToColor } from '@pisagor/core/themes'
import Cormorant from '@pisagor/cormorant'
import Icon from '@pisagor/icon'

import type { AlertProps } from './alert.types'
import * as styles from './alert.styles'

const Alert: React.FunctionComponent<AlertProps> = ({
  accent = false,
  children,
  className,
  color = 'neutral',
  icon,
  status,
  testId,
  title,
  ...rest
}) => {
  const appearance = convertStatusNameToColor(color, status)
  const classNames = classnames(
    styles.root,
    styles.appearance(appearance, accent),
    className
  )

  const renderIcon = () => {
    if (icon) {
      return icon
    }

    switch (status) {
      case 'error':
        return <Icon name="error" color={appearance} />
      case 'help':
        return <Icon name="help" color={appearance} />
      case 'info':
        return <Icon name="info" color={appearance} />
      case 'success':
        return <Icon name="check-circle" color={appearance} />
      case 'warning':
        return <Icon name="warning" color={appearance} />
    }
  }

  return (
    <section className={classNames} role="alert" data-testid={testId} {...rest}>
      <Cormorant condition={icon || status}>
        <div className={styles.icon}>{renderIcon()}</div>
      </Cormorant>
      <div className={styles.content}>
        <Cormorant condition={title}>
          <h3 className={styles.title}>{title}</h3>
        </Cormorant>
        <Cormorant condition={children}>
          <div>{children}</div>
        </Cormorant>
      </div>
    </section>
  )
}

export default Alert
