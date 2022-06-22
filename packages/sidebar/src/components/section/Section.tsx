import type { SectionProps } from './Section.types'
import * as Styles from './Section.styles'

export const Section: React.FunctionComponent<SectionProps> = ({
  children,
  testId,
  ...rest
}) => {
  return (
    <Styles.Root data-testid={testId} {...rest}>
      {children}
    </Styles.Root>
  )
}
