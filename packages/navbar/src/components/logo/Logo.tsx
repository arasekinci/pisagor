import { classnames } from 'begonya/functions'
import Anchor from '@pisagor/anchor'

import type { LogoProps } from './Logo.types'
import * as styles from './Logo.styles'

export const Logo: React.FunctionComponent<LogoProps> = ({
  children,
  className,
  href,
  src,
  testId,
  title,
}) => {
  const classNames = classnames(styles.root, className)

  const content = children || <img src={src} alt={title} />

  if (href) {
    return (
      <Anchor className={classNames} testId={testId && `${testId}-logo`}>
        {content}
      </Anchor>
    )
  }

  return (
    <div className={classNames} data-testid={testId && `${testId}-logo`}>
      {content}
    </div>
  )
}
