import React, { Fragment } from 'react'
import { classnames } from 'begonya/functions'
import token from '@pisagor/core/tokens'

import type { AvatarPresenceProps } from './avatar-presence.types'
import * as styles from './avatar-presence.styles'

const AvatarPresence: React.FunctionComponent<AvatarPresenceProps> = ({
  className,
  presence,
  testId,
  ...rest
}) => {
  const classNames = classnames(styles.root, className)

  const renderPresence = () => {
    switch (presence) {
      case 'busy':
        return (
          <Fragment>
            <circle fill={token('icon.status.error')} cx="4" cy="4" r="4" />
            <path
              fill={token('background')}
              d="M3.3,1.9l2.8,2.8c0.2,0.2,0.2,0.5,0,0.7L5.4,6.1c-0.2,0.2-0.5,0.2-0.7,0L1.9,3.3c-0.2-0.2-0.2-0.5,0-0.7l0.7-0.7C2.8,1.7,3.1,1.7,3.3,1.9z"
            />
          </Fragment>
        )
      case 'focus':
        return (
          <path
            fill={token('icon.status.help')}
            d="M4,8 C1.790861,8 0,6.209139 0,4 C0,1.790861 1.790861,0 4,0 C6.209139,0 8,1.790861 8,4 C8,6.209139 6.209139,8 4,8 Z M4,6.66666667 C5.47275933,6.66666667 6.66666667,5.47275933 6.66666667,4 C6.66666667,2.52724067 5.47275933,1.33333333 4,1.33333333 C2.52724067,1.33333333 1.33333333,2.52724067 1.33333333,4 C1.33333333,5.47275933 2.52724067,6.66666667 4,6.66666667 Z M4,5.33333333 C3.26362033,5.33333333 2.66666667,4.73637967 2.66666667,4 C2.66666667,3.26362033 3.26362033,2.66666667 4,2.66666667 C4.73637967,2.66666667 5.33333333,3.26362033 5.33333333,4 C5.33333333,4.73637967 4.73637967,5.33333333 4,5.33333333 Z"
          />
        )
      case 'offline':
        return (
          <Fragment>
            <path
              fill={token('icon.status.neutral')}
              d="M4,8 C6.209139,8 8,6.209139 8,4 C8,1.790861 6.209139,0 4,0 C1.790861,0 0,1.790861 0,4 C0,6.209139 1.790861,8 4,8 Z M4,6 C5.1045695,6 6,5.1045695 6,4 C6,2.8954305 5.1045695,2 4,2 C2.8954305,2 2,2.8954305 2,4 C2,5.1045695 2.8954305,6 4,6 Z"
            />
            <path
              fill={token('background.accent.neutral')}
              d="M4,6 C5.1045695,6 6,5.1045695 6,4 C6,2.8954305 5.1045695,2 4,2 C2.8954305,2 2,2.8954305 2,4 C2,5.1045695 2.8954305,6 4,6 Z"
            />
          </Fragment>
        )
      case 'online':
        return <circle fill={token('icon.accent.green')} cx="4" cy="4" r="4" />
    }
  }

  return (
    <svg
      className={classNames}
      width={15}
      height={15}
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      data-testid={testId}
      {...rest}
    >
      {renderPresence()}
    </svg>
  )
}

export default AvatarPresence
