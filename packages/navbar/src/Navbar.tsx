import type { NavbarProps } from './Navbar.types'
import * as Styled from './Navbar.styles'

const Navbar: React.FunctionComponent<NavbarProps> = ({
  renderAppSwitcher: AppSwitcher,
  renderCreate: Create,
  renderHelp: Help,
  renderLogo: Logo,
  renderMenu: Menu,
  renderNotifications: Notifications,
  renderProfile: Profile,
  renderSearch: Search,
  renderSettings: Settings,
  renderSignIn: SignIn,
  testId,
  ...rest
}) => {
  return (
    <Styled.Root
      role="banner"
      data-testid={testId && `${testId}-header`}
      {...rest}
    >
      <Styled.Navigation>
        {AppSwitcher && <AppSwitcher />}
        {Logo && <Logo />}
        <Styled.Menu data-testid={testId && `${testId}-menu`}>
          {Menu && <Menu />}
          {Create && <Create />}
        </Styled.Menu>
      </Styled.Navigation>
      <Styled.Actions data-testid={testId && `${testId}-actions`}>
        {Search && <Search />}
        {Notifications && <Notifications />}
        {Help && <Help />}
        {Settings && <Settings />}
        {SignIn && <SignIn />}
        {Profile && <Profile />}
      </Styled.Actions>
    </Styled.Root>
  )
}

export default Navbar
