import React, { useEffect, useRef, useState } from 'react'
import Tooltip from '@pisagor/tooltip'

import ClipboardButton from '../clipboard-button'
import type { TokenProps } from './Token.types'

const Token: React.FunctionComponent<TokenProps> = ({
  desciption,
  name,
  value,
}) => {
  const lightRef = useRef<HTMLSpanElement>(null)
  const darkRef = useRef<HTMLSpanElement>(null)
  const [lightValue, setLightValue] = useState<string>()
  const [darkValue, setDarkValue] = useState<string>()

  useEffect(() => {
    const name = value.replace('var(', '').replace(')', '')

    if (lightRef.current) {
      setLightValue(getComputedStyle(lightRef.current).getPropertyValue(name))
    }

    if (darkRef.current) {
      setDarkValue(getComputedStyle(darkRef.current).getPropertyValue(name))
    }
  }, [value])

  return (
    <tr>
      <td>
        <ClipboardButton text={name} />
        <p>{desciption}</p>
      </td>
      <td>
        <Tooltip content={lightValue}>
          <span
            ref={lightRef}
            className="token-swatch"
            data-theme="light"
            style={{ backgroundColor: value }}
          />
        </Tooltip>
        <p>{value}</p>
      </td>
      <td>
        <Tooltip content={darkValue}>
          <span
            ref={darkRef}
            className="token-swatch"
            data-theme="dark"
            style={{ backgroundColor: value }}
          />
        </Tooltip>
        <p>{value}</p>
      </td>
    </tr>
  )
}

export default Token
