import type { NextPage } from 'next'
import Breadcrumbs, { BreadcrumbsItem } from '@pisagor/breadcrumbs'
import Icon from '@pisagor/icon'

import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const BreadcrumbsPage: NextPage = () => {
  return (
    <DocumentLayout
      title="Breadcrumbs"
      description="A breadcrumbs are a navigation system used to show a user's location in a site or app."
    >
      <h4>Default</h4>
      <Example>
        <Breadcrumbs>
          <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
          <BreadcrumbsItem href="#">Documents</BreadcrumbsItem>
          <BreadcrumbsItem href="#">Components</BreadcrumbsItem>
        </Breadcrumbs>
      </Example>
      <h4>Separator</h4>
      <Example>
        <Breadcrumbs separator={<Icon name="chevron_right" />}>
          <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
          <BreadcrumbsItem href="#">Documents</BreadcrumbsItem>
          <BreadcrumbsItem href="#">Components</BreadcrumbsItem>
        </Breadcrumbs>
      </Example>
      <h3>Breadcrumbs with icon</h3>
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
      <h4>Icon after</h4>
      <Example>
        <Breadcrumbs>
          <BreadcrumbsItem href="/#" iconAfter={<Icon name="home" />} />
          <BreadcrumbsItem href="/#" iconAfter={<Icon name="whatshot" />} />
          <BreadcrumbsItem href="/#" iconAfter={<Icon name="grain" />} />
        </Breadcrumbs>
        <hr />
        <Breadcrumbs>
          <BreadcrumbsItem href="/#" iconAfter={<Icon name="home" />}>
            Home
          </BreadcrumbsItem>
          <BreadcrumbsItem href="/#" iconAfter={<Icon name="whatshot" />}>
            Documents
          </BreadcrumbsItem>
          <BreadcrumbsItem href="/#" iconAfter={<Icon name="grain" />}>
            Components
          </BreadcrumbsItem>
        </Breadcrumbs>
      </Example>
    </DocumentLayout>
  )
}

export default BreadcrumbsPage
