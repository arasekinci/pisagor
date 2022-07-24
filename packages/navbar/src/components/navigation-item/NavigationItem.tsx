import { classnames } from 'begonya/functions'
import { CustomButton } from '@pisagor/button'

import type { NavigationItemProps } from './NavigationItem.types'
import * as styles from './NavigationItem.styles'

export const NavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  children,
  className,
  isSelected,
  testId,
  ...rest
}) => {
  const classNames = classnames(
    styles.root,
    isSelected && styles.selected,
    className
  )

  return (
    <div className={classNames}>
      <CustomButton
        className={styles.button}
        testId={testId && `${testId}-menu`}
        {...rest}
      >
        {children}
      </CustomButton>
    </div>
  )
}
