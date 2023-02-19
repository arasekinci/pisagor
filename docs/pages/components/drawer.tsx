import type { NextPage } from 'next'
import Icon from '@pisagor/icon'
import Button from '@pisagor/button'
import Drawer, {
  DrawerAction,
  DrawerPosition,
  DrawerSize,
} from '@pisagor/drawer'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'
import { Fragment, useState } from 'react'

const DrawerPage: NextPage = () => {
  const [open, setOpen] = useState<number>(-1)
  const [size, setSize] = useState<DrawerSize>()
  const [position, setPosition] = useState<DrawerPosition>()

  return (
    <DocumentLayout
      title={components.drawer.title}
      description={components.drawer.description}
    >
      <h4>Default</h4>
      <Example>
        <Button onClick={() => setOpen(0)}>Open drawer</Button>
      </Example>
      <h4>Actions</h4>
      <Example>
        <Button onClick={() => setOpen(1)}>Open drawer</Button>
      </Example>
      <h4>Position</h4>
      <Example>
        <Button onClick={() => setPosition('left')}>
          See drawer positions
        </Button>
      </Example>
      <h4>Size</h4>
      <Example>
        <Button onClick={() => setSize('narrow')}>See drawer sizes</Button>
      </Example>
      <Drawer isOpen={open === 0} onClose={() => setOpen(-1)}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ab
          consequuntur illum rem magni, distinctio similique pariatur voluptate
          eos, commodi vitae nisi mollitia impedit! Ad perspiciatis quod dolorum
          deserunt architecto!
        </p>
      </Drawer>
      <Drawer
        isOpen={open === 1}
        onClose={() => setOpen(-1)}
        actions={
          <Fragment>
            <DrawerAction>
              <Icon name="menu" size="small" />
            </DrawerAction>
            <DrawerAction>
              <Icon name="search" size="small" />
            </DrawerAction>
          </Fragment>
        }
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Drawer>
      <Drawer
        position={position}
        isOpen={Boolean(position)}
        onClose={() => setPosition(undefined)}
      >
        <div
          style={{
            maxWidth: 125,
            gap: 8,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Button
            status={position === 'left' ? 'info' : 'neutral'}
            onClick={() => setPosition('left')}
          >
            Left
          </Button>
          <Button
            status={position === 'right' ? 'info' : 'neutral'}
            onClick={() => setPosition('right')}
          >
            Right
          </Button>
          <Button
            status={position === 'top' ? 'info' : 'neutral'}
            onClick={() => setPosition('top')}
          >
            Top
          </Button>
          <Button
            status={position === 'bottom' ? 'info' : 'neutral'}
            onClick={() => setPosition('bottom')}
          >
            Bottom
          </Button>
        </div>
      </Drawer>
      <Drawer
        size={size}
        isOpen={Boolean(size)}
        onClose={() => setSize(undefined)}
      >
        <div
          style={{
            maxWidth: 125,
            gap: 8,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Button
            status={size === 'narrow' ? 'info' : 'neutral'}
            onClick={() => setSize('narrow')}
          >
            Narrow
          </Button>
          <Button
            status={size === 'medium' ? 'info' : 'neutral'}
            onClick={() => setSize('medium')}
          >
            Medium
          </Button>
          <Button
            status={size === 'wide' ? 'info' : 'neutral'}
            onClick={() => setSize('wide')}
          >
            Wide
          </Button>
          <Button
            status={size === 'extended' ? 'info' : 'neutral'}
            onClick={() => setSize('extended')}
          >
            Extended
          </Button>
          <Button
            status={size === 'full' ? 'info' : 'neutral'}
            onClick={() => setSize('full')}
          >
            Full
          </Button>
        </div>
      </Drawer>
    </DocumentLayout>
  )
}

export default DrawerPage
