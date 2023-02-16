import type { NextPage } from 'next'
import { Row, Column } from '@pisagor/gridview'
import Alert from '@pisagor/alert'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const AlertPage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.alert.title}
      description={components.alert.description}
    >
      <h4>Default</h4>
      <Example>
        <Alert title="Modi ducimus vel rem odit architecto laboriosam.">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            eum sint modi quaerat ratione culpa?
          </p>
        </Alert>
      </Example>
      <h3>Appearance</h3>
      <h4>Error</h4>
      <Example>
        <Alert status="error" title="This account will be permanently deleted">
          <p>The user `user15` no longer has access to Atlassian services.</p>
        </Alert>
      </Example>
      <h4>Help</h4>
      <Example>
        <Alert
          status="help"
          title="Your managed accounts now include Trello access"
        >
          <p>
            Some users haven&apos;t started using their Atlassian account for
            Trello. Changes you make to an account are reflected only if the
            user starts using the account for Trello.
          </p>
        </Alert>
      </Example>
      <h4>Info</h4>
      <Example>
        <Alert status="info" title="Editing is restricted">
          <p>
            You&apos;re not allowed to change these restrictions. It&apos;s
            either due to the restrictions on the page, or permission settings
            for this space.
          </p>
        </Alert>
      </Example>
      <h4>Success</h4>
      <Example>
        <Alert status="success" title="Merged pull request">
          <p>Pull request #10146 merged after a successful build</p>
        </Alert>
      </Example>
      <h4>Warning</h4>
      <Example>
        <Alert status="warning" title="Cannot connect to the database">
          <p>We are unable to save any progress at this time.</p>
        </Alert>
      </Example>
      <h3>Color</h3>
      <Example>
        <Row gutter="sm">
          <Column size={6}>
            <Alert color="blue" title="Blue Alert">
              <p>This is a blue alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert accent color="blue" title="Accent Blue Alert">
              <p>This is a blue alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert color="green" title="Green Alert">
              <p>This is a green alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert accent color="green" title="Accent Green Alert">
              <p>This is a green alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert color="magenta" title="Magenta Alert">
              <p>This is a magenta alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert accent color="magenta" title="Accent Magenta Alert">
              <p>This is a magenta alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert color="neutral" title="Neutral Alert">
              <p>This is a neutral alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert accent color="neutral" title="Accent Neutral Alert">
              <p>This is a neutral alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert color="orange" title="Orange Alert">
              <p>This is a orange alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert accent color="orange" title="Accent Orange Alert">
              <p>This is a orange alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert color="purple" title="Purple Alert">
              <p>This is a purple alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert accent color="purple" title="Accent Purple Alert">
              <p>This is a purple alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert color="red" title="Red Alert">
              <p>This is a red alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert accent color="red" title="Accent Red Alert">
              <p>This is a red alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert color="teal" title="Teal Alert">
              <p>This is a teal alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert accent color="teal" title="Accent Teal Alert">
              <p>This is a teal alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert color="yellow" title="Yellow Alert">
              <p>This is a yellow alert message.</p>
            </Alert>
          </Column>
          <Column size={6}>
            <Alert accent color="yellow" title="Accent Yellow Alert">
              <p>This is a yellow alert message.</p>
            </Alert>
          </Column>
        </Row>
      </Example>
    </DocumentLayout>
  )
}

export default AlertPage
