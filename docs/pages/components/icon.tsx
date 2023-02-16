import type { NextPage } from 'next'
import Icon from '@pisagor/icon'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const IconPage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.icon.title}
      description={components.icon.description}
    >
      <h4>Default</h4>
      <Example>
        <Icon name="home" />
      </Example>
      <h4>Appearance</h4>
      <Example>
        <Icon name="home" appearance="error" />
        <Icon name="home" appearance="help" />
        <Icon name="home" appearance="info" />
        <Icon name="home" appearance="success" />
        <Icon name="home" appearance="warning" />
      </Example>
      <h4>Color</h4>
      <Example>
        <Icon name="home" />
        <Icon name="home" color="blue" />
        <Icon name="home" color="green" />
        <Icon name="home" color="magenta" />
        <Icon name="home" color="neutral" />
        <Icon name="home" color="orange" />
        <Icon name="home" color="purple" />
        <Icon name="home" color="red" />
        <Icon name="home" color="teal" />
        <Icon name="home" color="yellow" />
      </Example>
    </DocumentLayout>
  )
}

export default IconPage
