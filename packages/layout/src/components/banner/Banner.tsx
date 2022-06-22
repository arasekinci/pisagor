import type { BannerProps } from './Banner.types'
import * as Styled from './Banner.styles'

export const Banner: React.FunctionComponent<BannerProps> = ({
  position = 'fixed',
  height = 56,
  children,
  testId,
  ...rest
}) => {
  return (
    <Styled.Root
      position={position}
      data-testid={testId && `${testId}-banner`}
      {...rest}
    >
      <style>{`:root{--bannerHeight: ${height}px;}`}</style>
      {children}
    </Styled.Root>
  )
}
