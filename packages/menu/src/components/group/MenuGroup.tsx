import { classnames } from 'begonya/functions'

import type { MenuGroupProps } from './MenuGroup.types'
import * as styles from './MenuGroup.styles'

export const MenuGroup: React.FunctionComponent<MenuGroupProps> = ({
  children,
  className,
  hasSeparator,
  maxHeight,
  minHeight,
  role = 'group',
  style,
  testId,
  title,
  ...rest
}) => {
  const classNames = classnames(
    styles.root,
    hasSeparator ? styles.separator : null,
    className
  )

  return (
    <div
      className={classNames}
      role={role}
      aria-label={title}
      data-testid={testId && `${testId}-group`}
      style={{
        maxHeight,
        minHeight,
        ...style,
      }}
      {...rest}
    >
      {title && (
        <div className={styles.title} aria-hidden="true">
          {title}
        </div>
      )}
      {children}
    </div>
  )
}
