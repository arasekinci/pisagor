import type { NextPage } from 'next'
import Breadcrumbs, { BreadcrumbsItem } from '@pisagor/breadcrumbs'
import Icon from '@pisagor/icon'
import Sidebar, {
  Header,
  Content,
  Footer,
  Nested,
  ButtonItem,
  Section,
} from '@pisagor/sidebar'

import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const BreadcrumbsPage: NextPage = () => {
  return (
    <DocumentLayout
      title="Sidebar"
      description="A highly composable side navigation component that supports nested views."
    >
      <h3>Default</h3>
      <Example>
        <Sidebar>
          <Header>Sidebar Header</Header>
          <Content>
            <ButtonItem>Aras</ButtonItem>
            <ButtonItem>Aras</ButtonItem>
            <Section>
              <ButtonItem>Aras</ButtonItem>
              <ButtonItem>Aras</ButtonItem>
            </Section>
            <Nested>
              <ButtonItem>Aras</ButtonItem>
              <ButtonItem>Aras</ButtonItem>
            </Nested>
            <Nested>
              <ButtonItem>Aras</ButtonItem>
              <ButtonItem>Aras</ButtonItem>
            </Nested>
          </Content>
          <Footer>Sidebar Footer</Footer>
        </Sidebar>
      </Example>
      <h3>Components</h3>
      <h4>Icon before</h4>
      <Example>
        <Breadcrumbs>
          <BreadcrumbsItem href="/#" iconBefore={<Icon name="home" />} />
          <BreadcrumbsItem href="/#" iconBefore={<Icon name="whatshot" />} />
          <BreadcrumbsItem href="/#" iconBefore={<Icon name="grain" />} />
        </Breadcrumbs>
        <hr />
        <Breadcrumbs>
          <BreadcrumbsItem href="/#" iconBefore={<Icon name="home" />}>
            Home
          </BreadcrumbsItem>
          <BreadcrumbsItem href="/#" iconBefore={<Icon name="whatshot" />}>
            Documents
          </BreadcrumbsItem>
          <BreadcrumbsItem href="/#" iconBefore={<Icon name="grain" />}>
            Components
          </BreadcrumbsItem>
        </Breadcrumbs>
      </Example>
    </DocumentLayout>
  )
}

export default BreadcrumbsPage
