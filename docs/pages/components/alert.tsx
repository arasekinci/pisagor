import type { NextPage } from 'next'
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
        <Alert title="Alert title">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
            facere accusamus?
          </p>
        </Alert>
      </Example>
      <h3>Appearance</h3>
      <h4>Error</h4>
      <Example>
        <Alert
          appearance="error"
          title="This account will be permanently deleted"
        >
          <p>The user `user15` no longer has access to Atlassian services.</p>
        </Alert>
      </Example>
      <h4>Help</h4>
      <Example>
        <Alert
          appearance="help"
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
        <Alert appearance="info" title="Editing is restricted">
          <p>
            You&apos;re not allowed to change these restrictions. It&apos;s
            either due to the restrictions on the page, or permission settings
            for this space.
          </p>
        </Alert>
      </Example>
      <h4>Success</h4>
      <Example>
        <Alert appearance="success" title="Merged pull request">
          <p>Pull request #10146 merged after a successful build</p>
        </Alert>
      </Example>
      <h4>Warning</h4>
      <Example>
        <Alert appearance="warning" title="Cannot connect to the database">
          <p>We are unable to save any progress at this time.</p>
        </Alert>
      </Example>
    </DocumentLayout>
  )
}

export default AlertPage
