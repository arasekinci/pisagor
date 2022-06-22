import { useState } from 'react'

import type { RightPanelProps } from './RightPanel.types'
import * as Styled from './RightPanel.styles'
import Slot from '../slot'

export const RightPanel: React.FunctionComponent<RightPanelProps> = ({
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
      data-testid={testId && `${testId}-right-panel`}
      {...rest}
    >
      <style>{`:root{--rightPanelWidth: ${isOpen ? width : 20}px;}`}</style>
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
