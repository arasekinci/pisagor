import { usePisagor } from '@pisagor/core'

import type { AnchorProps } from './anchor.types'

const Anchor: React.FunctionComponent<AnchorProps> = ({
  children,
  testId,
  ...rest
}) => {
  const pisagor = usePisagor()
  const Component = pisagor.link

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

export default Anchor
