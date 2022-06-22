import type { PageHeaderProps } from './PageHeader.types'
import * as Styled from './PageHeader.styles'

export const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
  actions,
  title,
  breadcrumbs,
  children,
  testId,
  ...rest
}) => {
  return (
    <Styled.Root data-testid={testId} {...rest}>
      {breadcrumbs}
      <Styled.Header>
        <Styled.Title>
          <h1>{title}</h1>
        </Styled.Title>
        {actions && <Styled.Actions>{actions}</Styled.Actions>}
      </Styled.Header>
      {children && <Styled.Body>{children}</Styled.Body>}
    </Styled.Root>
  )
}
