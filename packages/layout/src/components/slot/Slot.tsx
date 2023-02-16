import Icon from '@pisagor/icon'

import type { SlotProps } from './Slot.types'
import * as Styled from './Slot.styles'

const Slot: React.FunctionComponent<SlotProps> = ({
  position = 'left',
  isOpen = true,
  children,
  onOpenChange,
  ...rest
}) => {
  return (
    <Styled.Root {...rest}>
      <Styled.Resize position={position} {...rest}>
        <Styled.ResizeShadow />
        <Styled.ResizeButton onClick={onOpenChange}>
          <Icon
            name={
              isOpen
                ? position === 'left'
                  ? 'chevron-right'
                  : 'chevron-left'
                : position === 'left'
                ? 'chevron-left'
                : 'chevron-right'
            }
          />
        </Styled.ResizeButton>
      </Styled.Resize>
      <Styled.Scrollable>{children}</Styled.Scrollable>
    </Styled.Root>
  )
}

export default Slot
