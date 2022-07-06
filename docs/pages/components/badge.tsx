import type { NextPage } from 'next'
import Badge from '@pisagor/badge'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const BadgePage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.badge.title}
      description={components.badge.description}
    >
      <h4>Default</h4>
      <Example>
        <Badge value={8} />
      </Example>
      <h3>Appearance</h3>
      <h4>Error</h4>
      <Example>
        <Badge appearance="error" value={25} />
      </Example>
      <h4>Help</h4>
      <Example>
        <Badge appearance="help" value={8} />
      </Example>
      <h4>Info</h4>
      <Example>
        <Badge appearance="info" value={5} />
      </Example>
      <h4>Success</h4>
      <Example>
        <Badge appearance="success" value="+100" />
      </Example>
      <h4>Warning</h4>
      <Example>
        <Badge appearance="warning" value={8} />
      </Example>
    </DocumentLayout>
  )
}

export default BadgePage
