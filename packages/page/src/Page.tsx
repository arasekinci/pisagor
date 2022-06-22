import type { PageProps } from './Page.types'
import * as Styled from './Page.styles'

const Page: React.FunctionComponent<PageProps> = ({
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

export default Page
