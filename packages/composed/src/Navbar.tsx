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
} from '@pisagor/navbar'

import type { NavbarComposedProps } from './Navbar.types'

const NavbarComposed: React.FunctionComponent<NavbarComposedProps> = ({
  appSwitcher,
  create,
  help,
  logo,
  menu,
  notifications,
  profile,
  search,
  settings,
  signin,
  testId,
  ...rest
}) => {
  return (
    <Navbar testId={testId} {...rest}>
      <Content testId={testId}>
        {appSwitcher && <AppSwitcher testId={testId} {...appSwitcher} />}
        {logo && <Logo {...logo} />}
        {menu && (
          <Navigation>
            {menu.map((item) => (
              <NavigationItem {...item} />
            ))}
          </Navigation>
        )}
        {create && <Create testId={testId} {...create} />}
      </Content>
      <Actions testId={testId}>
        {search && <Search testId={testId} {...search} />}
        {notifications && <Notifications testId={testId} {...notifications} />}
        {help && <Help testId={testId} {...help} />}
        {settings && <Settings testId={testId} {...settings} />}
        {profile && <Profile testId={testId} {...profile} />}
        {signin && <SignIn testId={testId} {...signin} />}
      </Actions>
    </Navbar>
  )
}

export default NavbarComposed

export type { NavbarComposed as NavbarProps }
