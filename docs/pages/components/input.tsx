import type { NextPage } from 'next'
import Input from '@pisagor/input'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const InputPage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.input.title}
      description={components.input.description}
    >
      <h4>Default</h4>
      <Example>
        <Input />
      </Example>
      <Example>
        <Input disabled />
      </Example>
    </DocumentLayout>
  )
}

export default InputPage
