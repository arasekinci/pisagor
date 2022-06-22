import type { NextPage } from 'next'
import Page, { PageHeader } from '@pisagor/page'
import { Row, Column } from '@pisagor/gridview'

import Card from '@/components/card'
import Layout from '@/layouts/main'

const Home: NextPage = () => {
  return (
    <Layout title="Design, develop, deliver">
      <Page>
        <PageHeader title="Design, develop, deliver">
          <p>
            Use web app end-to-end design language to create simple, intuitive
            and beautiful experiences.
          </p>
        </PageHeader>
        <Row gutter="lg">
          <Column size={6}>
            <Card
              type="presentation"
              href="/components"
              title="Components"
              image={{
                src: `/images/components.png`,
                width: 422,
                height: 355,
              }}
            >
              <p>
                Components are the intuitive building blocks of our design
                system.
              </p>
              <p className="link">Explore our components</p>
            </Card>
          </Column>
          <Column size={6}>
            <Card
              type="presentation"
              href="/foundations"
              title="Foundations"
              image={{
                src: `/images/foundations.png`,
                width: 422,
                height: 355,
              }}
            >
              <p>
                Foundations are the visual elements needed to create engaging
                layouts and end-to-end user experiences.
              </p>
              <p className="link">Explore our foundations</p>
            </Card>
          </Column>
        </Row>
      </Page>
    </Layout>
  )
}

export default Home
