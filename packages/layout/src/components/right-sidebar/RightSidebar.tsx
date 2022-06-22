import { useState } from 'react'

import type { RightSidebarProps } from './RightSidebar.types'
import * as Styled from './RightSidebar.styles'
import Slot from '../slot'

export const RightSidebar: React.FunctionComponent<RightSidebarProps> = ({
  position = 'fixed',
  width = 240,
  children,
  testId,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  return (
    <Styled.Root
      position={position}
      data-testid={testId && `${testId}-right-sidebar`}
      {...rest}
    >
      <style>{`:root{--rightSidebarWidth: ${isOpen ? width : 20}px;}`}</style>
      <Slot
        position="right"
        isOpen={isOpen}
        onOpenChange={() => setIsOpen((isOpen) => !isOpen)}
      >
        {children}
      </Slot>
    </Styled.Root>
  )
}
