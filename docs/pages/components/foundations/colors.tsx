import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { Row, Column } from '@pisagor/gridview'

import { color } from '@/core/utils'
import DocumentLayout from '@/layouts/document'

interface ColorProps {
  name: string
  title: string
}

export const Color: React.FunctionComponent<ColorProps> = ({ name, title }) => {
  const [hex, setHex] = useState('-')
  const [rgb, setRgb] = useState('-')

  useEffect(() => {
    const hex = getComputedStyle(document.documentElement).getPropertyValue(
      `--${name}`
    )

    if (hex) {
      setRgb(color.rgb(hex).join(', '))
      setHex(hex)
    }
  }, [name])

  return (
    <div className="color">
      <div
        className="color-swatch"
        style={{ backgroundColor: hex || `var(--${name})` }}
      />
      <div className="color-content">
        <div className="color-name">
          <h4>Name</h4>
          <p>{title || name}</p>
        </div>
        <div>
          <h4>Hex</h4>
          <p>{hex}</p>
        </div>
        <div>
          <h4>RGB</h4>
          <p>{rgb}</p>
        </div>
      </div>
    </div>
  )
}

const Colors: NextPage = () => {
  return (
    <DocumentLayout
      title="Colors"
      description="Color distinguishes our brand and helps us create consistent experiences across products."
    >
      <h4>Neutrals</h4>
      <Row gutter="lg">
        {[
          ['N900 - Slate', 'N900'],
          ['N800 - Squid ink', 'N800'],
          ['N700 - Snorlax', 'N700'],
          ['N600 - Pet rock', 'N600'],
          ['N500 - McFanning', 'N500'],
          ['N400 - Concrete jungle', 'N400'],
          ['N300 - Clooney', 'N300'],
          ['N200 - Bling bling', 'N200'],
          ['N100 - Humboldt fog', 'N100'],
          ['N90 - Meredith', 'N90'],
          ['N80 - Spooky ghost', 'N80'],
          ['N70 - Blanche', 'N70'],
          ['N60 - Sentinel', 'N60'],
          ['N50 - Karl', 'N50'],
          ['N40 - Jolly fun time', 'N40'],
          ['N30 - Northeast snow', 'N30'],
          ["N20 - Gram's hair", 'N20'],
          ['N10 - Wash me', 'N10'],
          ['N0 - Doctor', 'N0'],
        ].map(([title, name]) => (
          <Column key={name} size={4}>
            <Color title={title} name={name} />
          </Column>
        ))}
      </Row>
      <h4>Red</h4>
      <Row gutter="lg">
        {[
          ["R500 - Dragon's blood", 'R500'],
          ['R400 - Red dirt', 'R400'],
          ['R300 - Poppy surprise', 'R300'],
          ['R200 - Salmon sashimi', 'R200'],
          ['R100 - Alexandria', 'R100'],
          ['R75 - Bondi sunburn', 'R75'],
          ['R50 - Rosie', 'R50'],
        ].map(([title, name]) => (
          <Column key={name} size={4}>
            <Color title={title} name={name} />
          </Column>
        ))}
      </Row>
      <h4>Yellow</h4>
      <Row gutter="lg">
        {[
          ['Y500 - Debrito', 'Y500'],
          ['Y400 - Cheezy blasters', 'Y400'],
          ['Y300 - Golden state', 'Y300'],
          ['Y100 - Cowbell', 'Y100'],
          ['Y75 - Dandelion whisper', 'Y75'],
          ['Y50 - James blonde', 'Y50'],
        ].map(([title, name]) => (
          <Column key={name} size={4}>
            <Color title={title} name={name} />
          </Column>
        ))}
      </Row>
      <h4>Green</h4>
      <Row gutter="lg">
        {[
          ['G500 - Keen green', 'G500'],
          ['G400 - Slime', 'G400'],
          ['G300 - Fine pine', 'G300'],
          ['G100 - Cloverleaf', 'G100'],
          ['G75 - Mintie', 'G75'],
          ['G50 - The smell', 'G50'],
        ].map(([title, name]) => (
          <Column key={name} size={4}>
            <Color title={title} name={name} />
          </Column>
        ))}
      </Row>
      <h4>Blue</h4>
      <Row gutter="lg">
        {[
          ['B500 - Chore coat', 'B500'],
          ['B400 - Pacific bridge', 'B400'],
          ['B300 - Sodium explosion', 'B300'],
          ['B100 - Arvo breeze', 'B100'],
          ['B75 - Schwag', 'B75'],
          ['B50 - Pixie dust', 'B50'],
        ].map(([title, name]) => (
          <Column key={name} size={4}>
            <Color title={title} name={name} />
          </Column>
        ))}
      </Row>
      <h4>Purple</h4>
      <Row gutter="lg">
        {[
          ['P500 - Prince', 'P500'],
          ['P400 - Snozzberry', 'P400'],
          ["P300 - Da' juice", 'P300'],
          ['P100 - Herky jerky', 'P100'],
          ['P75 - Phantom mist', 'P75'],
          ['P50 - Lavender secret', 'P50'],
        ].map(([title, name]) => (
          <Column key={name} size={4}>
            <Color title={title} name={name} />
          </Column>
        ))}
      </Row>
    </DocumentLayout>
  )
}

export default Colors
