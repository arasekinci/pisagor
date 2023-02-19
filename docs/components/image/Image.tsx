/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react'
import { classnames } from 'begonya/functions'

import type { ImageProps } from './Image.types'
import * as Styles from './Image.styles'

const Image: React.FunctionComponent<ImageProps> = ({
  alt,
  className,
  height,
  loading = 'lazy',
  width,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const imageRef = useRef<HTMLImageElement>(null)
  const classNames = classnames(
    Styles.root,
    {
      loaded: !isLoading,
      loading: isLoading,
    },
    className
  )

  const handleLoadStart = () => {
    setIsLoading(true)
  }

  const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    if (event.currentTarget) {
      const parent = event.currentTarget.parentElement

      if (parent) {
        setIsLoading(false)
      }
    }
  }

  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    if (event.currentTarget) {
      const parent = event.currentTarget.parentElement

      if (parent) {
        parent.classList.add('broken-image')
        setIsLoading(false)
      }
    }
  }

  return (
    <div className={classNames}>
      <img
        className={Styles.node}
        ref={imageRef}
        width={width}
        height={height}
        alt={alt}
        loading={loading}
        onError={handleError}
        {...(loading === 'eager' && {
          onLoad: handleLoad,
          onLoadStart: handleLoadStart,
        })}
        {...rest}
      />
    </div>
  )
}

export default Image
