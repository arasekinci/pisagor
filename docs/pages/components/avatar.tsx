import type { NextPage } from 'next'
import Avatar, { AvatarGroup } from '@pisagor/avatar'
import Tooltip from '@pisagor/tooltip'

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
        <Tooltip content="Aras Ekinci">
          <Avatar>AE</Avatar>
        </Tooltip>
      </Example>
      <h3>Shape</h3>
      <Example>
        <Avatar shape="square" />
        <Avatar shape="circle" />
      </Example>
      <h3>Presence</h3>
      <Example>
        <table className="table:4">
          <thead>
            <tr>
              <th>busy</th>
              <th>focus</th>
              <th>offline</th>
              <th>online</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Avatar presence="busy" />
              </td>
              <td>
                <Avatar presence="focus" />
              </td>
              <td>
                <Avatar presence="offline" />
              </td>
              <td>
                <Avatar presence="online" />
              </td>
            </tr>
          </tbody>
        </table>
      </Example>
      <h3>Size</h3>
      <Example>
        <table className="table:5">
          <thead>
            <tr>
              <th>xsmall</th>
              <th>small</th>
              <th>medium</th>
              <th>large</th>
              <th>xlarge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Avatar size="xsmall" />
              </td>
              <td>
                <Avatar size="small" />
              </td>
              <td>
                <Avatar size="medium" />
              </td>
              <td>
                <Avatar size="large" />
              </td>
              <td>
                <Avatar size="xlarge" />
              </td>
            </tr>
          </tbody>
        </table>
      </Example>
      <h2>Avatar Group</h2>
      <h4>Default</h4>
      <Example>
        <AvatarGroup>
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarGroup>
      </Example>
    </DocumentLayout>
  )
}

export default AvatarPage
