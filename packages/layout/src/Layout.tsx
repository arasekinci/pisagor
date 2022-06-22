import { useEffect } from 'react'
import { useTheme } from '@pisagor/theme'

import type { LayoutProps } from './Layout.types'
import * as Styled from './Layout.styles'

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  testId,
  ...rest
}) => {
  const theme = useTheme()

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <Styled.Root data-testid={testId} {...rest}>
      {children}
    </Styled.Root>
  )
}

export default Layout
