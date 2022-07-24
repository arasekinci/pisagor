import LayoutBase, {
  Banner,
  Content,
  LeftPanel,
  LeftSidebar,
  Main,
  Navbar,
  RightPanel,
  RightSidebar,
} from '@pisagor/layout'

import type { LayoutProps } from './Layout.types'

export type { LayoutProps }

const Layout: React.FunctionComponent<LayoutProps> = ({
  banner,
  content,
  leftPanel,
  leftSidebar,
  main,
  navbar,
  rightSidebar,
  rightPanel,
  testId,
  ...rest
}) => {
  return (
    <LayoutBase testId={testId} {...rest}>
      {leftPanel && <LeftPanel testId={testId} {...leftPanel} />}
      {banner && <Banner testId={testId} {...banner} />}
      {navbar && <Navbar testId={testId} {...navbar} />}
      <Main testId={testId} {...main}>
        {leftSidebar && <LeftSidebar testId={testId} {...leftSidebar} />}
        {content && <Content testId={testId} {...content} />}
        {rightSidebar && <RightSidebar testId={testId} {...rightSidebar} />}
      </Main>
      {rightPanel && <RightPanel testId={testId} {...rightPanel} />}
    </LayoutBase>
  )
}

export default Layout
