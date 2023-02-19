import React, { useEffect, useState } from 'react'
import { createPopper } from '@popperjs/core'
import Portal from '@pisagor/portal'

import type { PopperProps } from './popper.types'

const Popper: React.FunctionComponent<PopperProps> = ({
  children,
  offset = [0, 8],
  placement = 'auto',
  position = 'absolute',
  testId,
  triggerRef,
  ...rest
}) => {
  const [content, setContent] = useState<HTMLDivElement | null>()

  useEffect(() => {
    const trigger = triggerRef.current

    if (trigger && content) {
      createPopper(trigger, content, {
        placement,
        strategy: position,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: offset,
            },
          },
        ],
      })
    }
  }, [triggerRef, content, position, placement, offset])

  return (
    <Portal>
      <div ref={(node) => setContent(node)} data-testid={testId} {...rest}>
        {children}
      </div>
    </Portal>
  )
}

export default Popper
