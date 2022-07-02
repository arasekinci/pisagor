import type { NextPage } from 'next'
import Page, { PageHeader } from '@pisagor/page'
import { Row, Column } from '@pisagor/gridview'

import { components } from '@/constants/definitions'
import Card from '@/components/card'
import Layout from '@/layouts/main'

const Components: NextPage = () => {
  return (
    <Layout title="Design, develop, deliver">
      <Page>
        <PageHeader title="Components">
          <p>
            Components are the reusable building blocks of our design system.
            Each component meets a specific interaction or UI need, and has been
            specifically created to work together to create patterns and
            intuitive user experiences.
          </p>
        </PageHeader>
        <Row>
          {Object.values(components).map((component) => (
            <Column key={component.key} size={4}>
              <Card
                type="components"
                href={component.pathname}
                title={component.title}
                image={{
                  src: `/images/components/${component.key}.svg`,
                  alt: component.title,
                  width: 270,
                  height: 194,
                }}
              >
                <p>{component.description}</p>
              </Card>
            </Column>
          ))}
        </Row>
      </Page>
    </Layout>
  )
}

export default Components
