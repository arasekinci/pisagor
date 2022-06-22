import { useEffect } from 'react'
import { useTheme } from '@pisagor/theme'

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
  const theme = useTheme()

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <Styled.Root data-testid={testId} {...rest}>
      {breadcrumbs}
      <h1 id={id}>{children}</h1>
      {actions}
      {bottomBar}
    </Styled.Root>
  )
}
