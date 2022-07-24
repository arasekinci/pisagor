import React, { Fragment } from 'react'
import { classnames } from 'begonya/functions'
import { G300, N0, N200, N40, P400, R300 } from '@pisagor/core/colors'

import type { AvatarPresence, AvatarProps } from './Avatar.types'
import * as styles from './Avatar.styles'

const Avatar: React.FunctionComponent<AvatarProps> = ({
  children,
  className,
  name,
  presence,
  shape = 'circle',
  size = 'medium',
  src,
  status,
  testId,
  ...rest
}) => {
  const classNames = classnames(
    styles.root,
    styles.shape[shape],
    styles.size[size],
    className
  )

  const renderPresence = () => {
    switch (presence) {
      case 'busy':
        return (
          <Fragment>
            <circle fill={R300} cx="4" cy="4" r="4" />
            <path
              fill={N0}
              d="M3.3,1.9l2.8,2.8c0.2,0.2,0.2,0.5,0,0.7L5.4,6.1c-0.2,0.2-0.5,0.2-0.7,0L1.9,3.3c-0.2-0.2-0.2-0.5,0-0.7l0.7-0.7C2.8,1.7,3.1,1.7,3.3,1.9z"
            />
          </Fragment>
        )
      case 'focus':
        return (
          <path
            fill={P400}
            d="M4,8 C1.790861,8 0,6.209139 0,4 C0,1.790861 1.790861,0 4,0 C6.209139,0 8,1.790861 8,4 C8,6.209139 6.209139,8 4,8 Z M4,6.66666667 C5.47275933,6.66666667 6.66666667,5.47275933 6.66666667,4 C6.66666667,2.52724067 5.47275933,1.33333333 4,1.33333333 C2.52724067,1.33333333 1.33333333,2.52724067 1.33333333,4 C1.33333333,5.47275933 2.52724067,6.66666667 4,6.66666667 Z M4,5.33333333 C3.26362033,5.33333333 2.66666667,4.73637967 2.66666667,4 C2.66666667,3.26362033 3.26362033,2.66666667 4,2.66666667 C4.73637967,2.66666667 5.33333333,3.26362033 5.33333333,4 C5.33333333,4.73637967 4.73637967,5.33333333 4,5.33333333 Z"
          />
        )
      case 'offline':
        return (
          <Fragment>
            <path
              fill={N200}
              d="M4,8 C6.209139,8 8,6.209139 8,4 C8,1.790861 6.209139,0 4,0 C1.790861,0 0,1.790861 0,4 C0,6.209139 1.790861,8 4,8 Z M4,6 C5.1045695,6 6,5.1045695 6,4 C6,2.8954305 5.1045695,2 4,2 C2.8954305,2 2,2.8954305 2,4 C2,5.1045695 2.8954305,6 4,6 Z"
            />
            <path
              fill={N40}
              d="M4,6 C5.1045695,6 6,5.1045695 6,4 C6,2.8954305 5.1045695,2 4,2 C2.8954305,2 2,2.8954305 2,4 C2,5.1045695 2.8954305,6 4,6 Z"
            />
          </Fragment>
        )
      case 'online':
        return <circle fill={G300} cx="4" cy="4" r="4" />
    }
  }

  return (
    <div className={classNames} data-testid={testId} {...rest}>
      {src ? (
        <img className={styles.img} src={src} alt={name} />
      ) : children ? (
        <span className={styles.name}>{children}</span>
      ) : (
        <svg
          className={styles.svg}
          width={24}
          height={24}
          viewBox="0 0 24 24"
          role="presentation"
        >
          <g fill="currentColor" fillRule="evenodd">
            <path d="M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </g>
        </svg>
      )}
      {presence && (
        <svg
          className={styles.presence}
          width={15}
          height={15}
          viewBox="0 0 8 8"
          xmlns="http://www.w3.org/2000/svg"
        >
          {renderPresence()}
        </svg>
      )}
    </div>
  )
}

export default Avatar
