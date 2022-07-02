import type { NextPage } from 'next'
import Form, { Fieldset, Label, Message } from '@pisagor/form'
import Input from '@pisagor/input'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const FormPage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.form.title}
      description={components.form.description}
    >
      <h4>Default</h4>
      <Example>
        <Form>
          <Fieldset
            title="Sign in"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          >
            <Label>Username</Label>
            <Input type="text" placeholder="Input" />
            <br />
            <Label>Password</Label>
            <Input type="text" placeholder="Input" />
          </Fieldset>
        </Form>
      </Example>
      <h3>Components</h3>
      <h4>Fieldset</h4>
      <Example>
        <Fieldset
          title="Create a new repository"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        >
          <p>Fieldset content</p>
        </Fieldset>
      </Example>
      <h4>Label</h4>
      <Example>
        <Label>Default label</Label>
        <br />
        <Label required>Required label</Label>
      </Example>
      <h4>Message</h4>
      <h5>Description</h5>
      <Example>
        <Message>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Message>
      </Example>
      <h5>Valid</h5>
      <Example>
        <Message type="valid">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Message>
      </Example>
      <h5>Invalid</h5>
      <Example>
        <Message type="invalid">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Message>
      </Example>
    </DocumentLayout>
  )
}

export default FormPage
