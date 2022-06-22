import { useState } from 'react'

import type { LeftPanelProps } from './LeftPanel.types'
import * as Styled from './LeftPanel.styles'
import Slot from '../slot'

export const LeftPanel: React.FunctionComponent<LeftPanelProps> = ({
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
      data-testid={testId && `${testId}-left-panel`}
      {...rest}
    >
      <style>{`:root{--leftPanelWidth: ${isOpen ? width : 20}px;}`}</style>
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
