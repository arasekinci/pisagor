import React, { useEffect, useRef, useState } from 'react'

import ClipboardButton from '../clipboard-button'
import type { ShadowProps } from './Shadow.types'

const Shadow: React.FunctionComponent<ShadowProps> = ({
  desciption,
  value,
  name,
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
        <span
          ref={lightRef}
          className="token-swatch"
          data-theme="light"
          style={{ boxShadow: value }}
        />
        <p>{lightValue}</p>
      </td>
      <td>
        <span
          ref={darkRef}
          className="token-swatch"
          data-theme="dark"
          style={{ boxShadow: value }}
        />
        <p>{darkValue}</p>
      </td>
    </tr>
  )
}

export default Shadow
