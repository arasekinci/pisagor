import type { NextPage } from 'next'
import Badge from '@pisagor/badge'
import Icon from '@pisagor/icon'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const BadgePage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.badge.title}
      description={components.badge.description}
    >
      <h3>Text</h3>
      <h4>Default</h4>
      <Example>
        <Badge value={8} />
      </Example>
      <h4>Status</h4>
      <Example>
        <table className="table:6">
          <thead>
            <tr>
              <th />
              <th>error</th>
              <th>help</th>
              <th>info</th>
              <th>success</th>
              <th>warning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>
                <Badge status="error" value={25} />
              </td>
              <td>
                <Badge status="help" value={8} />
              </td>
              <td>
                <Badge status="info" value={5} />
              </td>
              <td>
                <Badge status="success" value="+100" />
              </td>
              <td>
                <Badge status="warning" value={8} />
              </td>
            </tr>
            <tr>
              <th>accent</th>
              <td>
                <Badge accent status="error" value={25} />
              </td>
              <td>
                <Badge accent status="help" value={8} />
              </td>
              <td>
                <Badge accent status="info" value={5} />
              </td>
              <td>
                <Badge accent status="success" value="+100" />
              </td>
              <td>
                <Badge accent status="warning" value={8} />
              </td>
            </tr>
          </tbody>
        </table>
      </Example>
      <h4>Color</h4>
      <Example>
        <table className="table:10">
          <thead>
            <tr>
              <th />
              <th>blue</th>
              <th>green</th>
              <th>magenta</th>
              <th>neutral</th>
              <th>orange</th>
              <th>purple</th>
              <th>red</th>
              <th>teal</th>
              <th>yellow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th />
              <td>
                <Badge color="blue" value={10} />
              </td>
              <td>
                <Badge color="green" value={20} />
              </td>
              <td>
                <Badge color="magenta" value={30} />
              </td>
              <td>
                <Badge color="neutral" value={40} />
              </td>
              <td>
                <Badge color="orange" value={50} />
              </td>
              <td>
                <Badge color="purple" value={60} />
              </td>
              <td>
                <Badge color="red" value={70} />
              </td>
              <td>
                <Badge color="teal" value={80} />
              </td>
              <td>
                <Badge color="yellow" value={90} />
              </td>
            </tr>
            <tr>
              <th>accent</th>
              <td>
                <Badge accent color="blue" value={10} />
              </td>
              <td>
                <Badge accent color="green" value={20} />
              </td>
              <td>
                <Badge accent color="magenta" value={30} />
              </td>
              <td>
                <Badge accent color="neutral" value={40} />
              </td>
              <td>
                <Badge accent color="orange" value={50} />
              </td>
              <td>
                <Badge accent color="purple" value={60} />
              </td>
              <td>
                <Badge accent color="red" value={70} />
              </td>
              <td>
                <Badge accent color="teal" value={80} />
              </td>
              <td>
                <Badge accent color="yellow" value={90} />
              </td>
            </tr>
          </tbody>
        </table>
      </Example>
      <h3>Icon</h3>
      <h4>Default</h4>
      <Example>
        <Badge icon={<Icon name="home" />} />
      </Example>
      <h4>Status</h4>
      <Example>
        <table className="table:6">
          <thead>
            <tr>
              <th />
              <th>error</th>
              <th>help</th>
              <th>info</th>
              <th>success</th>
              <th>warning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td />
              <td>
                <Badge status="error" icon={<Icon name="close" />} />
              </td>
              <td>
                <Badge status="help" icon={<Icon name="add" />} />
              </td>
              <td>
                <Badge status="info" icon={<Icon name="edit" />} />
              </td>
              <td>
                <Badge status="success" icon={<Icon name="verified" />} />
              </td>
              <td>
                <Badge status="warning" icon={<Icon name="lock" />} />
              </td>
            </tr>
            <tr>
              <th>accent</th>
              <td>
                <Badge accent status="error" icon={<Icon name="close" />} />
              </td>
              <td>
                <Badge accent status="help" icon={<Icon name="add" />} />
              </td>
              <td>
                <Badge accent status="info" icon={<Icon name="edit" />} />
              </td>
              <td>
                <Badge
                  accent
                  status="success"
                  icon={<Icon name="verified" />}
                />
              </td>
              <td>
                <Badge accent status="warning" icon={<Icon name="lock" />} />
              </td>
            </tr>
          </tbody>
        </table>
      </Example>
      <h4>Color</h4>
      <Example>
        <table className="table:10">
          <thead>
            <tr>
              <th />
              <th>blue</th>
              <th>green</th>
              <th>magenta</th>
              <th>neutral</th>
              <th>orange</th>
              <th>purple</th>
              <th>red</th>
              <th>teal</th>
              <th>yellow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th />
              <td>
                <Badge color="blue" icon={<Icon name="search" />} />
              </td>
              <td>
                <Badge color="green" icon={<Icon name="menu" />} />
              </td>
              <td>
                <Badge color="magenta" icon={<Icon name="settings" />} />
              </td>
              <td>
                <Badge color="neutral" icon={<Icon name="grade" />} />
              </td>
              <td>
                <Badge color="orange" icon={<Icon name="bolt" />} />
              </td>
              <td>
                <Badge color="purple" icon={<Icon name="undo" />} />
              </td>
              <td>
                <Badge color="red" icon={<Icon name="javascript" />} />
              </td>
              <td>
                <Badge color="teal" icon={<Icon name="smartphone" />} />
              </td>
              <td>
                <Badge color="yellow" icon={<Icon name="share" />} />
              </td>
            </tr>
            <tr>
              <th>accent</th>
              <td>
                <Badge accent color="blue" icon={<Icon name="search" />} />
              </td>
              <td>
                <Badge accent color="green" icon={<Icon name="menu" />} />
              </td>
              <td>
                <Badge accent color="magenta" icon={<Icon name="settings" />} />
              </td>
              <td>
                <Badge accent color="neutral" icon={<Icon name="grade" />} />
              </td>
              <td>
                <Badge accent color="orange" icon={<Icon name="bolt" />} />
              </td>
              <td>
                <Badge accent color="purple" icon={<Icon name="undo" />} />
              </td>
              <td>
                <Badge accent color="red" icon={<Icon name="javascript" />} />
              </td>
              <td>
                <Badge accent color="teal" icon={<Icon name="smartphone" />} />
              </td>
              <td>
                <Badge accent color="yellow" icon={<Icon name="share" />} />
              </td>
            </tr>
          </tbody>
        </table>
      </Example>
    </DocumentLayout>
  )
}

export default BadgePage
