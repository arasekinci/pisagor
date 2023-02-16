import React from 'react'
import { classnames } from 'begonya/functions'

import AvatarPresence from './components/presence'
import type { AvatarProps } from './avatar.types'
import * as styles from './avatar.styles'

const Avatar: React.ForwardRefRenderFunction<HTMLDivElement, AvatarProps> = (
  {
    children,
    className,
    name,
    presence,
    shape = 'circle',
    size = 'medium',
    src,
    testId,
    ...rest
  },
  ref
) => {
  const classNames = classnames(
    styles.root,
    styles.shape[shape],
    styles.size[size],
    className
  )

  return (
    <div ref={ref} className={classNames} data-testid={testId} {...rest}>
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
      {presence && <AvatarPresence presence={presence} testId={testId} />}
    </div>
  )
}

export default React.forwardRef(Avatar)
