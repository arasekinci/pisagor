import React from 'react'
import token from '@pisagor/core/tokens'

import Container, { ContainerProps } from '../Container'

const Icon: React.FunctionComponent<ContainerProps> = ({
  iconGradientStart = token('background.status.info.bold'),
  iconGradientStop = token('background.status.info.bold.active'),
  ...rest
}) => {
  const id = 'atlaskit-starter'

  return (
    <Container
      aria-label="Atlaskit Starter Icon"
      iconColor={token('background.status.info.bold')}
      iconGradientStart={iconGradientStart}
      iconGradientStop={iconGradientStop}
      {...rest}
    >
      <canvas width="48" height="48" aria-hidden="true" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="50"
        height="50"
      >
        <defs>
          <linearGradient
            id={id}
            gradientUnits="userSpaceOnUse"
            x1="50%"
            y1="0"
            x2="0"
            y2="100%"
          >
            <stop stopColor={iconGradientStart} offset="0.01" />
            <stop stopColor={iconGradientStop} offset="1" />
          </linearGradient>
        </defs>
        <path
          fill="currentColor"
          opacity="0.6"
          d="M22.38 29.55C12.33 23.74 5.39 17.01 6.84 14.5C8.29 11.99 17.58 14.65 27.62 20.45C37.67 26.26 44.61 32.99 43.16 35.5C41.71 38.01 32.42 35.35 22.38 29.55Z"
        />
        <path
          fill="currentColor"
          opacity="0.6"
          d="M22.38 20.45C32.42 14.65 41.71 11.99 43.16 14.5C44.61 17.01 37.67 23.74 27.62 29.55C17.58 35.35 8.29 38.01 6.84 35.5C5.39 32.99 12.33 26.26 22.38 20.45Z"
        />
        <path
          fill={`url(#${id})`}
          d="M25 46C22.1 46 19.76 36.61 19.76 25C19.76 13.39 22.1 4 25 4C27.9 4 30.24 13.39 30.24 25C30.24 36.61 27.9 46 25 46Z"
        />
      </svg>
    </Container>
  )
}

export default Icon
