import type { NextPage } from 'next'
import Checkbox from '@pisagor/checkbox'
import Button from '@pisagor/button'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'
import { useState } from 'react'

const CheckboxPage: NextPage = () => {
  const [isChecked, setIsChecked] = useState<boolean>(true)

  return (
    <DocumentLayout
      title={components.checkbox.title}
      description={components.checkbox.description}
    >
      <h4>Default</h4>
      <Example>
        <Checkbox label="Checkbox">Default checkbox</Checkbox>
      </Example>
      <h4>Controlled</h4>
      <Example>
        <Checkbox checked={isChecked}>Controlled checkbox</Checkbox>
        <Button size="small" onClick={() => setIsChecked(!isChecked)}>
          {isChecked ? 'Unchecked' : 'Checked'}
        </Button>
      </Example>
      <h4>Disabled</h4>
      <Example>
        <Checkbox disabled>Disabled checkbox</Checkbox>
      </Example>
      <h4>Required</h4>
      <Example>
        <Checkbox required>Required checkbox</Checkbox>
      </Example>
      <h3>Size</h3>
      <Example>
        <Checkbox size="small">Small checkbox</Checkbox>
        <Checkbox size="medium">Medium checkbox</Checkbox>
        <Checkbox size="large">Large checkbox</Checkbox>
      </Example>
    </DocumentLayout>
  )
}

export default CheckboxPage
