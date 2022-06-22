import type {
  NavbarProps as BaseProps,
  AppSwitcherProps,
  CreateProps,
  HelpProps,
  LogoProps,
  NotificationsProps,
  ProfileProps,
  SearchProps,
  SettingsProps,
  SignInProps,
} from '@pisagor/navbar'

export interface NavbarProps extends Omit<BaseProps, 'children'> {
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
