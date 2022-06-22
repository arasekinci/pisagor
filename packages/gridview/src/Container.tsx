import { classnames } from 'begonya/functions'

import type { ContainerProps } from './Container.types'

const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  className,
  size = 'wide',
  ...rest
}) => {
  const classNames = classnames('container', `container-${size}`, className)

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  )
}

export default Container
