import type { NextPage } from 'next'
import Button from '@pisagor/button'
import Icon from '@pisagor/icon'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const ButtonPage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.button.title}
      description={components.button.description}
    >
      <h4>Default</h4>
      <Example>
        <Button>Button</Button>
      </Example>
      <h3>Appearance</h3>
      <h4>Error</h4>
      <Example>
        <Button appearance="error">Error button</Button>
      </Example>
      <h4>Help</h4>
      <Example>
        <Button appearance="help">Help button</Button>
      </Example>
      <h4>Info</h4>
      <Example>
        <Button appearance="info">Info button</Button>
      </Example>
      <h4>Success</h4>
      <Example>
        <Button appearance="success">Success button</Button>
      </Example>
      <h4>Warning</h4>
      <Example>
        <Button appearance="warning">Warning button</Button>
      </Example>
      <h3>Sizes</h3>
      <Example>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </Example>
      <h3>Button with icon</h3>
      <h4>Icon before</h4>
      <Example>
        <Button iconBefore={<Icon name="start" />}>Icon Before</Button>
      </Example>
      <h4>Icon after</h4>
      <Example>
        <Button iconAfter={<Icon name="star" />}>Icon After</Button>
      </Example>
    </DocumentLayout>
  )
}

export default ButtonPage
