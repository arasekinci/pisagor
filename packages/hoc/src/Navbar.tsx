import NavbarBase, {
  AppSwitcher,
  Create,
  Help,
  Notifications,
  Logo,
  Profile,
  Search,
  Settings,
  SignIn,
} from '@pisagor/navbar'

import type { NavbarProps } from './Navbar.types'

export type { NavbarProps }

const Navbar: React.FunctionComponent<NavbarProps> = ({
  appSwitcher,
  create,
  help,
  logo,
  notifications,
  profile,
  search,
  settings,
  signin,
  testId,
  ...rest
}) => {
  return (
    <NavbarBase
      renderAppSwitcher={() => <AppSwitcher testId={testId} {...appSwitcher} />}
      renderCreate={() => <Create testId={testId} {...create} />}
      renderHelp={() => <Help testId={testId} {...help} />}
      // renderLogo={() => <Logo testId={testId} {...logo} />}
      renderNotifications={() => (
        <Notifications testId={testId} {...notifications} />
      )}
      renderProfile={() => <Profile testId={testId} {...profile} />}
      renderSearch={() => <Search testId={testId} {...search} />}
      renderSettings={() => <Settings testId={testId} {...settings} />}
      renderSignIn={() => <SignIn testId={testId} {...signin} />}
      testId={testId}
      {...rest}
    />
  )
}

export default Navbar
