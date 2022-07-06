import React, { useEffect } from 'react'
import { classnames } from 'begonya/functions'
import Blanket from '@pisagor/blanket'
import Portal from '@pisagor/portal'
import Icon from '@pisagor/icon'

import { heights, widths } from './core/constants'
import { DrawerAction } from './components/action'

import type { DrawerProps } from './Drawer.types'
import * as styles from './Drawer.styles'

const Drawer: React.FunctionComponent<DrawerProps> = ({
  actions,
  children,
  className,
  icon,
  isOpen,
  position = 'left',
  size = 'medium',
  testId,
  onClose,
  onKeyDown,
}) => {
  // const [open, setOpen] = useState<boolean>(isOpen)
  const classNames = classnames(
    styles.root,
    styles.position[position],
    className
  )

  const getSize = () => {
    switch (position) {
      case 'top':
      case 'bottom':
        return { height: heights[size] }
      case 'left':
      case 'right':
        return { width: widths[size] }
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && onClose) {
      onClose()
    }

    if (onKeyDown) {
      onKeyDown(event)
    }
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return function cleanup() {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const renderIcon = () => {
    switch (position) {
      case 'top':
        return <Icon name="arrow_upward" label="Close drawer" size="small" />
      case 'right':
        return <Icon name="arrow_forward" label="Close drawer" size="small" />
      case 'bottom':
        return <Icon name="arrow_downward" label="Close drawer" size="small" />
      case 'left':
        return <Icon name="arrow_back" label="Close drawer" size="small" />
    }
  }

  if (isOpen) {
    return (
      <Portal>
        <Blanket onClick={onClose} />
        <div className={classNames} style={getSize()} data-testid={testId}>
          <div className={styles.sidebar}>
            <DrawerAction onClick={onClose}>
              {icon || renderIcon()}
            </DrawerAction>
            {actions}
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </Portal>
    )
  }

  return null
}

export default Drawer
