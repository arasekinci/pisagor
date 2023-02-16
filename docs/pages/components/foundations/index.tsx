import type { NextPage } from 'next'
import Page, { PageHeader } from '@pisagor/page'
import { Row, Column } from '@pisagor/gridview'

import { foundations } from '@/constants/definitions'
import Card from '@/components/card'
import Layout from '@/layouts/main'

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
          {Object.values(foundations).map((foundation) => (
            <Column key={foundation.key} size={6}>
              <Card
                type="foundation"
                href={`/foundations/${foundation.key}`}
                title={foundation.title}
              >
                <p>{foundation.description}</p>
              </Card>
            </Column>
          ))}
        </Row>
      </Page>
    </Layout>
  )
}

export default Foundations
