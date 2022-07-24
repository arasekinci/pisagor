import type {
  LayoutProps as BaseProps,
  BannerProps,
  ContentProps,
  LeftPanelProps,
  LeftSidebarProps,
  MainProps,
  NavbarProps,
  RightPanelProps,
  RightSidebarProps,
} from '@pisagor/layout'

export interface LayoutProps extends Omit<BaseProps, 'children'> {
  /**
   * The prop description will be added here.
   */
  banner?: BannerProps
  /**
   * The prop description will be added here.
   */
  content?: ContentProps
  /**
   * The prop description will be added here.
   */
  leftPanel?: LeftPanelProps
  /**
   * The prop description will be added here.
   */
  leftSidebar?: LeftSidebarProps
  /**
   * The prop description will be added here.
   */
  main?: Omit<MainProps, 'children'>
  /**
   * The prop description will be added here.
   */
  navbar?: NavbarProps
  /**
   * The prop description will be added here.
   */
  rightSidebar?: RightSidebarProps
  /**
   * The prop description will be added here.
   */
  rightPanel?: RightPanelProps
}
