import React, { useState } from 'react'
import type { NextPage } from 'next'
import { palette } from '@pisagor/core/tokens'
import Tooltip from '@pisagor/tooltip'
import Button from '@pisagor/button'

import DocumentLayout from '@/layouts/document'

interface ClipboardButtonProps {
  text: string
}

interface TokenProps {
  name: string
  desciption: string
  light: string
  dark: string
}

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

const Token: React.FunctionComponent<TokenProps> = ({
  dark,
  desciption,
  light,
  name,
}) => {
  return (
    <tr>
      <td>
        <ClipboardButton text={name} />
        <p>{desciption}</p>
      </td>
      <td>
        <span className="token-swatch" style={{ backgroundColor: light }} />
        <p>{light}</p>
      </td>
      <td>
        <span className="token-swatch" style={{ backgroundColor: dark }} />
        <p>{dark}</p>
      </td>
    </tr>
  )
}

const Tokens: NextPage = () => {
  return (
    <DocumentLayout
      title="Tokens"
      description="Token distinguishes our brand and helps us create consistent experiences across products."
    >
      <h3>Background</h3>
      <p>
        <ClipboardButton
          text={`import { background } from '@pisagor/core/tokens'`}
        />
      </p>
      <table className="token">
        <thead>
          <tr>
            <th>Token and description</th>
            <th>Light value</th>
            <th>Dark value</th>
          </tr>
        </thead>
        <tbody>
          <Token
            name="accent.neutral.lighter"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('neutral.100')}
            dark={palette('neutral.1000')}
          />
          <Token
            name="accent.neutral.light"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('neutral.200')}
            dark={palette('neutral.900')}
          />
          <Token
            name="accent.neutral"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('neutral.400')}
            dark={palette('neutral.700')}
          />
          <Token
            name="accent.neutral.dark"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('neutral.600')}
            dark={palette('neutral.500')}
          />
          <Token
            name="accent.neutral.darker"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('neutral.800')}
            dark={palette('neutral.300')}
          />
          <Token
            name="accent.blue.lighter"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('blue.100')}
            dark={palette('blue.1000')}
          />
          <Token
            name="accent.blue.light"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('blue.200')}
            dark={palette('blue.900')}
          />
          <Token
            name="accent.blue"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('blue.400')}
            dark={palette('blue.700')}
          />
          <Token
            name="accent.blue.dark"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('blue.600')}
            dark={palette('blue.500')}
          />
          <Token
            name="accent.blue.darker"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('blue.800')}
            dark={palette('blue.300')}
          />
          <Token
            name="accent.red.lighter"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('red.100')}
            dark={palette('red.1000')}
          />
          <Token
            name="accent.red.light"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('red.200')}
            dark={palette('red.900')}
          />
          <Token
            name="accent.red"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('red.400')}
            dark={palette('red.700')}
          />
          <Token
            name="accent.red.dark"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('red.600')}
            dark={palette('red.500')}
          />
          <Token
            name="accent.red.darker"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('red.800')}
            dark={palette('red.300')}
          />
          <Token
            name="accent.orange.lighter"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('orange.100')}
            dark={palette('orange.1000')}
          />
          <Token
            name="accent.orange.light"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('orange.200')}
            dark={palette('orange.900')}
          />
          <Token
            name="accent.orange"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('orange.400')}
            dark={palette('orange.700')}
          />
          <Token
            name="accent.orange.dark"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('orange.600')}
            dark={palette('orange.400')}
          />
          <Token
            name="accent.orange.darker"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('orange.800')}
            dark={palette('orange.300')}
          />
          <Token
            name="accent.yellow.lighter"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('yellow.100')}
            dark={palette('yellow.1000')}
          />
          <Token
            name="accent.yellow.light"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('yellow.200')}
            dark={palette('yellow.900')}
          />
          <Token
            name="accent.yellow"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('yellow.400')}
            dark={palette('yellow.700')}
          />
          <Token
            name="accent.yellow.dark"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('yellow.600')}
            dark={palette('yellow.500')}
          />
          <Token
            name="accent.yellow.darker"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('yellow.800')}
            dark={palette('yellow.300')}
          />
          <Token
            name="accent.green.lighter"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('green.100')}
            dark={palette('green.1000')}
          />
          <Token
            name="accent.green.light"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('green.200')}
            dark={palette('green.900')}
          />
          <Token
            name="accent.green"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('green.400')}
            dark={palette('green.700')}
          />
          <Token
            name="accent.green.dark"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('green.600')}
            dark={palette('green.500')}
          />
          <Token
            name="accent.green.darker"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('green.800')}
            dark={palette('green.300')}
          />
          <Token
            name="accent.purple.lighter"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('purple.100')}
            dark={palette('purple.1000')}
          />
          <Token
            name="accent.purple.light"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('purple.200')}
            dark={palette('purple.900')}
          />
          <Token
            name="accent.purple"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('purple.400')}
            dark={palette('purple.700')}
          />
          <Token
            name="accent.purple.dark"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('purple.600')}
            dark={palette('purple.500')}
          />
          <Token
            name="accent.purple.darker"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('purple.800')}
            dark={palette('purple.300')}
          />
          <Token
            name="accent.teal.lighter"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('teal.100')}
            dark={palette('teal.1000')}
          />
          <Token
            name="accent.teal.light"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('teal.200')}
            dark={palette('teal.900')}
          />
          <Token
            name="accent.teal"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('teal.400')}
            dark={palette('teal.700')}
          />
          <Token
            name="accent.teal.dark"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('teal.600')}
            dark={palette('teal.500')}
          />
          <Token
            name="accent.teal.darker"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('teal.800')}
            dark={palette('teal.300')}
          />
          <Token
            name="accent.magenta.lighter"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('magenta.100')}
            dark={palette('magenta.1000')}
          />
          <Token
            name="accent.magenta.light"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('magenta.200')}
            dark={palette('magenta.900')}
          />
          <Token
            name="accent.magenta"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('magenta.400')}
            dark={palette('magenta.700')}
          />
          <Token
            name="accent.magenta.dark"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('magenta.600')}
            dark={palette('magenta.500')}
          />
          <Token
            name="accent.magenta.darker"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('magenta.800')}
            dark={palette('magenta.300')}
          />
        </tbody>
      </table>
      <h3>Font</h3>
      <p>
        <ClipboardButton text={`import { font } from '@pisagor/core/tokens'`} />
      </p>
      <table className="token">
        <thead>
          <tr>
            <th>Token and description</th>
            <th>Light value</th>
            <th>Dark value</th>
          </tr>
        </thead>
        <tbody>
          <Token
            name="accent.blue"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('blue.800')}
            dark={palette('blue.300')}
          />
          <Token
            name="accent.green"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('green.800')}
            dark={palette('green.300')}
          />
          <Token
            name="accent.magenta"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('magenta.800')}
            dark={palette('magenta.300')}
          />
          <Token
            name="accent.neutral"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('neutral.800')}
            dark={palette('neutral.300')}
          />
          <Token
            name="accent.orange"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('orange.800')}
            dark={palette('orange.300')}
          />
          <Token
            name="accent.purple"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('purple.800')}
            dark={palette('purple.300')}
          />
          <Token
            name="accent.red"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('red.800')}
            dark={palette('red.300')}
          />
          <Token
            name="accent.teal"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('teal.800')}
            dark={palette('teal.300')}
          />
          <Token
            name="accent.yellow"
            desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit corrupti repudiandae nemo quo quod nobis odio."
            light={palette('yellow.800')}
            dark={palette('yellow.300')}
          />
        </tbody>
      </table>
    </DocumentLayout>
  )
}

export default Tokens
