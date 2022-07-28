import React from 'react'

import type { ContainerProps } from './types'
import * as Styles from './styles'

const Container: React.FunctionComponent<ContainerProps> = ({
  iconColor = 'inherit',
  iconGradientStart = 'inherit',
  iconGradientStop = 'inherit',
  size = 'medium',
  textColor = 'currentColor',
  children,
  ...rest
}) => (
  <Styles.Root
    role="presentation"
    iconColor={iconColor}
    iconGradientStart={iconGradientStart}
    iconGradientStop={iconGradientStop}
    size={size}
    textColor={textColor}
    {...rest}
  >
    {children}
  </Styles.Root>
)

export default Container

export type { ContainerProps }
