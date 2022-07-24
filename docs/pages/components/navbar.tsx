import type { NextPage } from 'next'
import Navbar, {
  Actions,
  AppSwitcher,
  Content,
  Create,
  Help,
  Logo,
  Navigation,
  NavigationItem,
  Notifications,
  Profile,
  Search,
  Settings,
  SignIn,
} from '@pisagor/navbar-next'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const NavbarPage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.navbar.title}
      description={components.navbar.description}
    >
      <h4>Default</h4>
      <Example>
        <Navbar>
          <Content>
            <AppSwitcher />
            <Logo />
            <Navigation>
              <NavigationItem>Item</NavigationItem>
              <NavigationItem>Item</NavigationItem>
              <NavigationItem>Item</NavigationItem>
              <NavigationItem>Item</NavigationItem>
            </Navigation>
            <Create />
          </Content>
          <Actions>
            <Help />
            <SignIn />
          </Actions>
        </Navbar>
      </Example>
      <h3>Components</h3>
      <h4>App switcher</h4>
      <Example>
        <Navbar>
          <AppSwitcher />
        </Navbar>
      </Example>
      <h4>Profile</h4>
      <Example>
        <Navbar>
          <Actions>
            <Profile />
          </Actions>
        </Navbar>
      </Example>
      <h4>Search</h4>
      <Example>
        <Navbar>
          <Actions>
            <Search />
          </Actions>
        </Navbar>
      </Example>
      <h4>Settings</h4>
      <Example>
        <Navbar>
          <Actions>
            <Settings />
          </Actions>
        </Navbar>
      </Example>
      <h4>Sign in</h4>
      <Example>
        <Navbar>
          <Actions>
            <SignIn />
          </Actions>
        </Navbar>
      </Example>
      <h4>Help</h4>
      <Example>
        <Navbar>
          <Actions>
            <Help />
          </Actions>
        </Navbar>
      </Example>
      <h4>Notifications</h4>
      <Example>
        <Navbar>
          <Actions>
            <Notifications />
          </Actions>
        </Navbar>
      </Example>
    </DocumentLayout>
  )
}

export default NavbarPage
