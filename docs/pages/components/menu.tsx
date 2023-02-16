import type { NextPage } from 'next'
import { background, font } from '@pisagor/core/tokens'
import Menu, { MenuGroup, MenuItem } from '@pisagor/menu'
import Icon from '@pisagor/icon'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const MenuPage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.menu.title}
      description={components.menu.description}
    >
      <h4>Default</h4>
      <Example>
        <Menu
          style={{
            color: font('text'),
            backgroundColor: background(),
            boxShadow:
              '0px 4px 8px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31)',
            borderRadius: 4,
            maxWidth: 320,
            margin: '16px auto',
          }}
        >
          <MenuGroup title="Starred">
            <MenuItem
              iconBefore={<Icon name="home" />}
              description="Next-gen software project"
            >
              Navigation System
            </MenuItem>
            <MenuItem
              iconBefore={<Icon name="search" />}
              description="Next-gen service desk"
            >
              Analytics Platform
            </MenuItem>
          </MenuGroup>
          <MenuGroup title="Recent">
            <MenuItem
              iconBefore={<Icon name="settings" />}
              description="Next-gen software project"
            >
              Fabric Editor
            </MenuItem>
            <MenuItem
              iconBefore={<Icon name="favorite" />}
              description="Classic business project"
            >
              Content Services
            </MenuItem>
            <MenuItem
              iconBefore={<Icon name="lock" />}
              description="Next-gen software project"
            >
              Trinity Mobile
            </MenuItem>
            <MenuItem
              iconBefore={<Icon name="verified" />}
              description="Classic service desk"
            >
              Customer Feedback
            </MenuItem>
            <MenuItem
              iconBefore={<Icon name="fingerprint" />}
              description="Classic software project"
            >
              Design System
            </MenuItem>
          </MenuGroup>
          <MenuGroup hasSeparator>
            <MenuItem>View all projects</MenuItem>
            <MenuItem>Create project</MenuItem>
          </MenuGroup>
        </Menu>
      </Example>
    </DocumentLayout>
  )
}

export default MenuPage
