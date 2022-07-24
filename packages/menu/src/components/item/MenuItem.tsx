import type { MenuItemProps } from './MenuItem.types'
import * as styles from './MenuItem.styles'

export const MenuItem: React.FunctionComponent<MenuItemProps> = ({
  children,
  description,
  iconAfter,
  iconBefore,
  testId,
  ...rest
}) => {
  return (
    <div
      className={styles.root}
      data-testid={testId && `${testId}-item`}
      {...rest}
    >
      {iconBefore && <span className={styles.iconBefore}>{iconBefore}</span>}
      <span className={styles.content}>
        <span className={styles.title}>{children}</span>
        {description && (
          <span className={styles.description}>{description}</span>
        )}
      </span>
      {iconAfter && <span className={styles.iconAfter}>{iconAfter}</span>}
    </div>
  )
}
