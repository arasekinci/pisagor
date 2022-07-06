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
      <h3>State</h3>
      <Example>
        <Input label="Placeholder" placeholder="Input placeholder" />
        <Input label="Disabled" disabled />
      </Example>
      <h3>Size</h3>
      <Example>
        <Input label="Large" size="large" />
        <Input label="Medium" size="medium" />
        <Input label="Small" size="small" />
      </Example>
      <h3>Type</h3>
      <Example>
        <Input type="color" id="color" label="Color" />
        <Input type="date" id="date" label="Date" />
        <Input
          type="datetime-local"
          id="datetime-local"
          label="Datetime local"
        />
        <Input type="email" id="email" label="Email" />
        <Input type="month" id="month" label="Month" />
        <Input type="number" id="number" label="Number" />
        <Input type="password" id="password" label="Password" />
        <Input type="search" id="search" label="Search" />
        <Input type="tel" id="tel" label="Tel" />
        <Input type="text" id="text" label="Text" />
        <Input type="time" id="time" label="Time" />
        <Input type="url" id="url" label="Url" />
        <Input type="week" id="week" label="Week" />
      </Example>
    </DocumentLayout>
  )
}

export default InputPage
