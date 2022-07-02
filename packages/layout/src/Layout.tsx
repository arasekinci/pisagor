import type { LayoutProps } from './Layout.types'
import * as Styled from './Layout.styles'

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  testId,
  ...rest
}) => {
  return (
    <Styled.Root data-testid={testId} {...rest}>
      {children}
    </Styled.Root>
  )
}

export default Layout
