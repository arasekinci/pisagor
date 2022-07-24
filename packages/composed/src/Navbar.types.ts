import type {
  AppSwitcherProps,
  CreateProps,
  HelpProps,
  LogoProps,
  NavbarProps,
  NavigationItemProps,
  NotificationsProps,
  ProfileProps,
  SearchProps,
  SettingsProps,
  SignInProps,
} from '@pisagor/navbar'

export interface NavbarComposedProps extends Omit<NavbarProps, 'children'> {
  /**
   * The prop description will be added here.
   */
  appSwitcher?: AppSwitcherProps
  /**
   * The prop description will be added here.
   */
  create?: CreateProps
  /**
   * The prop description will be added here.
   */
  help?: HelpProps
  /**
   * The prop description will be added here.
   */
  logo?: LogoProps
  /**
   * The prop description will be added here.
   */
  menu?: Array<NavigationItemProps>
  /**
   * The prop description will be added here.
   */
  notifications?: NotificationsProps
  /**
   * The prop description will be added here.
   */
  profile?: ProfileProps
  /**
   * The prop description will be added here.
   */
  search?: SearchProps
  /**
   * The prop description will be added here.
   */
  settings?: SettingsProps
  /**
   * The prop description will be added here.
   */
  signin?: SignInProps
}
