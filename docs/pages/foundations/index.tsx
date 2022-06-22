import type { NextPage } from 'next'
import Page, { PageHeader } from '@pisagor/page'
import { Row, Column } from '@pisagor/gridview'

import Card from '@/components/card'
import Layout from '@/layouts/main'

const foundations = [
  [
    'colors',
    'Colors',
    'Color distinguishes our brand and helps us create consistent experiences across products.',
  ],
  [
    'gridview',
    'Gridview',
    'The grid is the foundation for positioning elements onscreen. Designing to the grid helps create seamless, easy to follow experiences.',
  ],
  [
    'typography',
    'Typography',
    'Typography is our system of fonts. Each font conveys the appropriate sentiment to assist our users through each stage of their journey.',
  ],
]

const Foundations: NextPage = () => {
  return (
    <Layout title="Foundations">
      <Page>
        <PageHeader title="Foundations">
          <p>
            Foundations are the visual elements needed to create engaging
            end-to-end user experiences. This includes guidance on iconography,
            typography, layout and structure.
          </p>
        </PageHeader>
        <Row>
          {foundations.map(([slug, title, description]) => (
            <Column key={slug} size={6}>
              <Card
                type="foundation"
                href={`/foundations/${slug}`}
                title={title}
              >
                <p>{description}</p>
              </Card>
            </Column>
          ))}
        </Row>
      </Page>
    </Layout>
  )
}

export default Foundations
