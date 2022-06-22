import { useTheme } from '@pisagor/theme'

import type { LinkProps } from './Link.types'

const Link: React.FunctionComponent<LinkProps> = ({
  children,
  testId,
  ...rest
}) => {
  const theme = useTheme()
  const Component = theme.link

  if (Component) {
    return (
      <Component testId={testId} {...rest}>
        {children}
      </Component>
    )
  }

  return (
    <a data-testid={testId} {...rest}>
      {children}
    </a>
  )
}

export default Link
