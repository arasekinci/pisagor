import type { NavbarProps } from './Navbar.types'
import * as Styled from './Navbar.styles'

export const Navbar: React.FunctionComponent<NavbarProps> = ({
  position = 'fixed',
  height = 56,
  children,
  testId,
  ...rest
}) => {
  return (
    <Styled.Root
      position={position}
      data-testid={testId && `${testId}-navbar`}
      {...rest}
    >
      <style>{`:root{--navbarHeight: ${height}px;}`}</style>
      {children}
    </Styled.Root>
  )
}
