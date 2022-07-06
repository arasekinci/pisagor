import type { NextPage } from 'next'
import TextArea from '@pisagor/textarea'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const TextAreaPage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.textarea.title}
      description={components.textarea.description}
    >
      <h4>Default</h4>
      <Example>
        <TextArea />
      </Example>
      <h3>State</h3>
      <Example>
        <TextArea label="Placeholder" placeholder="Input placeholder" />
        <TextArea label="Disabled" disabled />
      </Example>
      <h3>Size</h3>
      <Example>
        <TextArea label="Large" size="large" />
        <TextArea label="Medium" size="medium" />
        <TextArea label="Small" size="small" />
      </Example>
      <Example>
        <TextArea disabled />
      </Example>
    </DocumentLayout>
  )
}

export default TextAreaPage
