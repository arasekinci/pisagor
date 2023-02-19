import type { NextPage } from 'next'
import Button, { CustomButton } from '@pisagor/button'
import Icon from '@pisagor/icon'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const ButtonPage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.button.title}
      description={components.button.description}
    >
      <h4>Default</h4>
      <Example>
        <Button>Button</Button>
      </Example>
      <h3>Appearance</h3>
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
                <Button accent={false} status="error">
                  Button
                </Button>
              </td>
              <td>
                <Button accent={false} status="help">
                  Button
                </Button>
              </td>
              <td>
                <Button accent={false} status="info">
                  Button
                </Button>
              </td>
              <td>
                <Button accent={false} status="success">
                  Button
                </Button>
              </td>
              <td>
                <Button accent={false} status="warning">
                  Button
                </Button>
              </td>
            </tr>
            <tr>
              <th>accent</th>
              <td>
                <Button status="error">Button</Button>
              </td>
              <td>
                <Button status="help">Button</Button>
              </td>
              <td>
                <Button status="info">Button</Button>
              </td>
              <td>
                <Button status="success">Button</Button>
              </td>
              <td>
                <Button status="warning">Button</Button>
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
                <Button accent={false} color="blue">
                  Blue
                </Button>
              </td>
              <td>
                <Button accent={false} color="green">
                  Green
                </Button>
              </td>
              <td>
                <Button accent={false} color="magenta">
                  Magenta
                </Button>
              </td>
              <td>
                <Button accent={false} color="neutral">
                  Neutral
                </Button>
              </td>
              <td>
                <Button accent={false} color="orange">
                  Orange
                </Button>
              </td>
              <td>
                <Button accent={false} color="purple">
                  Purple
                </Button>
              </td>
              <td>
                <Button accent={false} color="red">
                  Red
                </Button>
              </td>
              <td>
                <Button accent={false} color="teal">
                  Teal
                </Button>
              </td>
              <td>
                <Button accent={false} color="yellow">
                  Yellow
                </Button>
              </td>
            </tr>
            <tr>
              <th>accent</th>
              <td>
                <Button color="blue">Blue</Button>
              </td>
              <td>
                <Button color="green">Green</Button>
              </td>
              <td>
                <Button color="magenta">Magenta</Button>
              </td>
              <td>
                <Button color="neutral">Neutral</Button>
              </td>
              <td>
                <Button color="orange">Orange</Button>
              </td>
              <td>
                <Button color="purple">Purple</Button>
              </td>
              <td>
                <Button color="red">Red</Button>
              </td>
              <td>
                <Button color="teal">Teal</Button>
              </td>
              <td>
                <Button color="yellow">Yellow</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Example>
      <h3>Sizes</h3>
      <Example>
        <table className="table:3">
          <thead>
            <tr>
              <th>small</th>
              <th>medium</th>
              <th>large</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Button size="small">Small button</Button>
              </td>
              <td>
                <Button size="medium">Medium button</Button>
              </td>
              <td>
                <Button size="large">Large button</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Example>
      <h3>Button with icon</h3>
      <Example>
        <table className="table:3">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Icon Before</th>
              <th>Icon After</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Button icon={<Icon name="home" />} />
              </td>
              <td>
                <Button iconBefore={<Icon name="star" />}>Icon Before</Button>
              </td>
              <td>
                <Button iconAfter={<Icon name="star" />}>Icon After</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Example>
      <h3>Custom button</h3>
      <Example>
        <CustomButton
          iconBefore={<Icon name="star" />}
          iconAfter={<Icon name="star" />}
        >
          Icon After
        </CustomButton>
      </Example>
    </DocumentLayout>
  )
}

export default ButtonPage
