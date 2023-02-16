import type { NextPage } from 'next'
import Accordion, {
  AccordionItem,
  AccordionSummary,
  AccordionDetail,
} from '@pisagor/accordion'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const AccordionPage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.accordion.title}
      description={components.accordion.description}
    >
      <h4>Default</h4>
      <Example>
        <Accordion id="accordion">
          <AccordionItem>
            <AccordionSummary>Accordion Header 1</AccordionSummary>
            <AccordionDetail>
              <div>Accordion Panel 1</div>
            </AccordionDetail>
          </AccordionItem>
          <AccordionItem>
            <AccordionSummary>Accordion Header 2</AccordionSummary>
            <AccordionDetail>
              <div>Accordion Panel 2</div>
            </AccordionDetail>
          </AccordionItem>
          <AccordionItem>
            <AccordionSummary>Accordion Header 3</AccordionSummary>
            <AccordionDetail>
              <div>Accordion Panel 3</div>
            </AccordionDetail>
          </AccordionItem>
          <AccordionItem>
            <AccordionSummary>Accordion Header 4</AccordionSummary>
            <AccordionDetail>
              <div>Accordion Panel 4</div>
            </AccordionDetail>
          </AccordionItem>
          <AccordionItem>
            <AccordionSummary>Accordion Header 5</AccordionSummary>
            <AccordionDetail>
              <div>Accordion Panel 5</div>
            </AccordionDetail>
          </AccordionItem>
        </Accordion>
      </Example>
    </DocumentLayout>
  )
}

export default AccordionPage
