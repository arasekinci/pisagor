import type { NextPage } from 'next'
import Avatar from '@pisagor/avatar'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const AvatarPage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.avatar.title}
      description={components.avatar.description}
    >
      <h4>Default</h4>
      <Example>
        <Avatar />
        <Avatar src="/images/albert-einstein.jpeg" name="Albert Einstein" />
        <Avatar>AE</Avatar>
      </Example>
      <h3>Shape</h3>
      <Example>
        <Avatar shape="square" />
        <Avatar shape="circle" />
      </Example>
      <h3>Presence</h3>
      <Example>
        <Avatar presence="busy" />
        <Avatar presence="focus" />
        <Avatar presence="offline" />
        <Avatar presence="online" />
      </Example>
      <h3>Size</h3>
      <Example>
        <Avatar size="xsmall" />
        <Avatar size="small" />
        <Avatar size="medium" />
        <Avatar size="large" />
        <Avatar size="xlarge" />
      </Example>
    </DocumentLayout>
  )
}

export default AvatarPage
