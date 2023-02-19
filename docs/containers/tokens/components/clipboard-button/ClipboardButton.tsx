import React, { useState } from 'react'
import Tooltip from '@pisagor/tooltip'
import Button from '@pisagor/button'

import type { ClipboardButtonProps } from './ClipboardButton.types'

const ClipboardButton: React.FunctionComponent<ClipboardButtonProps> = ({
  text,
}) => {
  const [copy, setCopy] = useState<boolean>(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    navigator.clipboard.writeText(text).then(() => {
      setCopy(true)

      setTimeout(() => {
        setCopy(false)
      }, 1000)
    })
  }

  return (
    <Tooltip content={copy ? 'Copied!' : 'Copy to clipboard'}>
      <Button size="small" onClick={handleClick}>
        {text}
      </Button>
    </Tooltip>
  )
}

export default ClipboardButton
