import styled from '@emotion/styled'

import type { ContainerProps } from './types'
import { sizes } from './constants'

export const Root = styled.span<ContainerProps>`
  color: ${(props) => props.iconColor};
  display: inline-block;
  fill: ${(props) => props.textColor};
  height: ${(props) => props.size && sizes[props.size]}px;
  position: relative;
  user-select: none;
  vertical-align: middle;

  > svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: inherit;
  }

  > canvas {
    display: block;
    height: 100%;
    visibility: hidden;
  }

  ${(props) =>
    props.iconGradientStart === 'inherit' &&
    props.iconGradientStop === 'inherit' &&
    'stop { stop-color: currentColor; }'};
`
