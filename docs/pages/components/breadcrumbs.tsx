import type { NextPage } from 'next'
import BreadcrumbsWithProps from '@pisagor/composed/breadcrumbs'
import Breadcrumbs, { BreadcrumbsItem } from '@pisagor/breadcrumbs'
import Icon from '@pisagor/icon'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const BreadcrumbsPage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.breadcrumbs.title}
      description={components.breadcrumbs.description}
    >
      <h4>Default</h4>
      <Example>
        <Breadcrumbs>
          <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
          <BreadcrumbsItem href="#">Documents</BreadcrumbsItem>
          <BreadcrumbsItem href="#">Components</BreadcrumbsItem>
        </Breadcrumbs>
        <br />
        <BreadcrumbsWithProps
          items={[
            {
              href: '#',
              children: 'Home',
            },
            {
              href: '#',
              children: 'Documents',
            },
            {
              href: '#',
              children: 'Components',
            },
          ]}
        />
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
          <BreadcrumbsItem
            href="/#"
            iconBefore={<Icon name="home" size="small" />}
          />
          <BreadcrumbsItem
            href="/#"
            iconBefore={<Icon name="whatshot" size="small" />}
          />
          <BreadcrumbsItem
            href="/#"
            iconBefore={<Icon name="grain" size="small" />}
          />
        </Breadcrumbs>
        <hr />
        <Breadcrumbs>
          <BreadcrumbsItem
            href="/#"
            iconBefore={<Icon name="home" size="small" />}
          >
            Home
          </BreadcrumbsItem>
          <BreadcrumbsItem
            href="/#"
            iconBefore={<Icon name="whatshot" size="small" />}
          >
            Documents
          </BreadcrumbsItem>
          <BreadcrumbsItem
            href="/#"
            iconBefore={<Icon name="grain" size="small" />}
          >
            Components
          </BreadcrumbsItem>
        </Breadcrumbs>
      </Example>
      <h4>Icon after</h4>
      <Example>
        <Breadcrumbs>
          <BreadcrumbsItem
            href="/#"
            iconAfter={<Icon name="home" size="small" />}
          />
          <BreadcrumbsItem
            href="/#"
            iconAfter={<Icon name="whatshot" size="small" />}
          />
          <BreadcrumbsItem
            href="/#"
            iconAfter={<Icon name="grain" size="small" />}
          />
        </Breadcrumbs>
        <hr />
        <Breadcrumbs>
          <BreadcrumbsItem
            href="/#"
            iconAfter={<Icon name="home" size="small" />}
          >
            Home
          </BreadcrumbsItem>
          <BreadcrumbsItem
            href="/#"
            iconAfter={<Icon name="whatshot" size="small" />}
          >
            Documents
          </BreadcrumbsItem>
          <BreadcrumbsItem
            href="/#"
            iconAfter={<Icon name="grain" size="small" />}
          >
            Components
          </BreadcrumbsItem>
        </Breadcrumbs>
      </Example>
    </DocumentLayout>
  )
}

export default BreadcrumbsPage
