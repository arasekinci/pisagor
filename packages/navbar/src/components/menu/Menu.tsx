import type { MenuProps } from './Menu.types'
import * as Styled from './Menu.styles'

export const Menu: React.FunctionComponent<MenuProps> = ({
  actions,
  bottomBar,
  breadcrumbs,
  children,
  id,
  testId,
  ...rest
}) => {
  return (
    <Styled.Root data-testid={testId} {...rest}>
      {breadcrumbs}
      <h1 id={id}>{children}</h1>
      {actions}
      {bottomBar}
    </Styled.Root>
  )
}
