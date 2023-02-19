import React, { Fragment, useState } from 'react'
import type { NextPage } from 'next'
// import type { LayerToken, Token } from '@pisagor/core'
import background from '@pisagor/core/dist/schema/background.json'
import border from '@pisagor/core/dist/schema/border.json'
import font from '@pisagor/core/dist/schema/font.json'
import icon from '@pisagor/core/dist/schema/icon.json'
import shadow from '@pisagor/core/dist/schema/shadow.json'
import Input from '@pisagor/input'
import Cormorant from '@pisagor/cormorant'

import DocumentLayout from '@/layouts/document'

import ShadowRow from './components/shadow'
import TokenRow from './components/token'

// type ItemList = Array<LayerToken | Token>
type ItemList = any[]

const TokensPage: NextPage = () => {
  const [results, setResult] = useState<ItemList | null>(null)

  const handleKeyup = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    const data = [...background, ...border, ...font, ...icon, ...shadow]

    if (value) {
      setResult(data.filter((item) => item.name.indexOf(value) !== -1))
    } else {
      setResult(null)
    }
  }

  const renderRowList = (list: any) => {
    return list.map((token: any) => {
      if (token.attributes.group === 'shadow') {
        return (
          <ShadowRow
            key={token.name}
            name={token.name}
            desciption={token.attributes.description}
            value={token.value as string}
          />
        )
      }

      return (
        <TokenRow
          key={token.name}
          name={token.name}
          desciption={token.attributes.description}
          value={token.value as string}
        />
      )
    })
  }

  const renderTable = (list: any) => {
    return (
      <table className="token">
        <thead>
          <tr>
            <th>Token and description</th>
            <th>Light value</th>
            <th>Dark value</th>
          </tr>
        </thead>
        <tbody>{renderRowList(list)}</tbody>
      </table>
    )
  }

  return (
    <DocumentLayout
      title="Tokens"
      description="Token distinguishes our brand and helps us create consistent experiences across products."
    >
      <Input placeholder="Search for tokens" onKeyUp={handleKeyup} />
      {results ? (
        <Fragment>
          <h3>Results</h3>
          {results.length ? renderTable(results) : <p>No result found</p>}
        </Fragment>
      ) : null}
      <Cormorant condition={!results}>
        <h3>Background</h3>
        {renderTable(background)}
        <h3>Borders</h3>
        {renderTable(border)}
        <h3>Fonts</h3>
        {renderTable(font)}
        <h3>Icons</h3>
        {renderTable(icon)}
        <h3>Shadow</h3>
        {renderTable(shadow)}
      </Cormorant>
    </DocumentLayout>
  )
}

export default TokensPage
