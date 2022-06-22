import { useState } from 'react'

import type { LeftSidebarProps } from './LeftSidebar.types'
import * as Styled from './LeftSidebar.styles'
import Slot from '../slot'

export const LeftSidebar: React.FunctionComponent<LeftSidebarProps> = ({
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
      data-testid={testId && `${testId}-left-sidebar`}
      {...rest}
    >
      <style>{`:root{--leftSidebarWidth: ${isOpen ? width : 20}px;}`}</style>
      <Slot
        position="left"
        isOpen={isOpen}
        onOpenChange={() => setIsOpen((isOpen) => !isOpen)}
      >
        {children}
      </Slot>
    </Styled.Root>
  )
}
