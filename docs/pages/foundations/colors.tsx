import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { palette } from '@pisagor/core/tokens'
import { Row, Column } from '@pisagor/gridview'
import Button from '@pisagor/button'

import { color } from '@/core/utils'
import DocumentLayout from '@/layouts/document'

interface ColorProps {
  name: string
  h?: string
}

const Color: React.FunctionComponent<ColorProps> = ({ name, h }) => {
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
    <div
      className="color"
      style={{ backgroundColor: h || hex || `var(--${name})` }}
    />
  )
}

const Colors: NextPage = () => {
  return (
    <DocumentLayout
      title="Colors"
      description="Color distinguishes our brand and helps us create consistent experiences across products."
    >
      <Row gutter="sm">
        <Column style={{ width: '10%' }}>
          <h4>Blue</h4>
          <br />
          {[
            'B100',
            'B200',
            'B300',
            'B400',
            'B500',
            'B600',
            'B700',
            'B800',
            'B900',
            'B1000',
          ].map((name) => (
            <Color key={name} name={name} />
          ))}
        </Column>
        <Column style={{ width: '10%' }}>
          <h4>Green</h4>
          <br />
          {[
            'G100',
            'G200',
            'G300',
            'G400',
            'G500',
            'G600',
            'G700',
            'G800',
            'G900',
            'G1000',
          ].map((name) => (
            <Color key={name} name={name} />
          ))}
        </Column>
        <Column style={{ width: '10%' }}>
          <h4>Magenta</h4>
          <br />
          {[
            'M100',
            'M200',
            'M300',
            'M400',
            'M500',
            'M600',
            'M700',
            'M800',
            'M900',
            'M1000',
          ].map((name) => (
            <Color key={name} name={name} />
          ))}
        </Column>
        <Column style={{ width: '10%' }}>
          <h4>Orange</h4>
          <br />
          {[
            'O100',
            'O200',
            'O300',
            'O400',
            'O500',
            'O600',
            'O700',
            'O800',
            'O900',
            'O1000',
          ].map((name) => (
            <Color key={name} name={name} />
          ))}
        </Column>
        <Column style={{ width: '10%' }}>
          <h4>Purple</h4>
          <br />
          {[
            'P100',
            'P200',
            'P300',
            'P400',
            'P500',
            'P600',
            'P700',
            'P800',
            'P900',
            'P1000',
          ].map((name) => (
            <Color key={name} name={name} />
          ))}
        </Column>
        <Column style={{ width: '10%' }}>
          <h4>Red</h4>
          <br />
          {[
            'R100',
            'R200',
            'R300',
            'R400',
            'R500',
            'R600',
            'R700',
            'R800',
            'R900',
            'R1000',
          ].map((name) => (
            <Color key={name} name={name} />
          ))}
        </Column>
        <Column style={{ width: '10%' }}>
          <h4>Teal</h4>
          <br />
          {[
            'T100',
            'T200',
            'T300',
            'T400',
            'T500',
            'T600',
            'T700',
            'T800',
            'T900',
            'T1000',
          ].map((name) => (
            <Color key={name} name={name} />
          ))}
        </Column>
        <Column style={{ width: '10%' }}>
          <h4>Yellow</h4>
          <br />
          {[
            'Y100',
            'Y200',
            'Y300',
            'Y400',
            'Y500',
            'Y600',
            'Y700',
            'Y800',
            'Y900',
            'Y1000',
          ].map((name) => (
            <Color key={name} name={name} />
          ))}
        </Column>
      </Row>
      <h3>Neutrals</h3>
      <br />
      <Row gutter="lg">
        <Column size={6}>
          <h4>Light Neutral</h4>
          <br />
          <div style={{ padding: 50, backgroundColor: '#f1f1f1' }}>
            {[
              'N0',
              'N100',
              'N200',
              'N300',
              'N400',
              'N500',
              'N600',
              'N700',
              'N800',
              'N900',
              'N1000',
              'N1100',
            ].map((name) => (
              <Color key={name} name={name} />
            ))}
          </div>
        </Column>
        <Column size={6}>
          <h4>Dark Neutral</h4>
          <br />
          <div style={{ padding: 50, backgroundColor: '#010101' }}>
            {[
              'N0',
              'N100',
              'N200',
              'N300',
              'N400',
              'N500',
              'N600',
              'N700',
              'N800',
              'N900',
              'N1000',
              'N1100',
            ].map((name) => (
              <Color key={name} name={name} />
            ))}
          </div>
        </Column>
      </Row>
    </DocumentLayout>
  )
}

export default Colors
