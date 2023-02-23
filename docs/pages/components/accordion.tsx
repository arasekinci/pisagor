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
            <AccordionSummary>Accordion Summary 1</AccordionSummary>
            <AccordionDetail>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                ut perferendis impedit asperiores non repellat culpa in quas
                nemo, earum voluptatem reiciendis sapiente possimus officiis
                nostrum unde doloribus voluptates? Soluta?
              </p>
            </AccordionDetail>
          </AccordionItem>
          <AccordionItem>
            <AccordionSummary>Accordion Summary 2</AccordionSummary>
            <AccordionDetail>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quis eos nemo quaerat a quasi optio doloremque
                officiis, quo rem modi ex consectetur aliquid corporis unde
                assumenda hic excepturi quos.
              </div>
            </AccordionDetail>
          </AccordionItem>
          <AccordionItem>
            <AccordionSummary>Accordion Summary 3</AccordionSummary>
            <AccordionDetail>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate totam eos unde aperiam laboriosam enim libero impedit
                sit, quae aut excepturi pariatur iure fuga animi soluta
                reiciendis incidunt possimus asperiores?
              </div>
            </AccordionDetail>
          </AccordionItem>
          <AccordionItem>
            <AccordionSummary>Accordion Summary 4</AccordionSummary>
            <AccordionDetail>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                cum porro autem at dignissimos sint dolor tenetur vitae, vero
                quam eveniet nihil quisquam ducimus sit, veritatis amet dolorem
                molestiae possimus.
              </div>
            </AccordionDetail>
          </AccordionItem>
        </Accordion>
      </Example>
      <h3>Collapse</h3>
      <Example>
        <Accordion id="collapse" collapse>
          <AccordionItem>
            <AccordionSummary>Accordion Summary 1</AccordionSummary>
            <AccordionDetail>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                ut perferendis impedit asperiores non repellat culpa in quas
                nemo, earum voluptatem reiciendis sapiente possimus officiis
                nostrum unde doloribus voluptates? Soluta?
              </p>
            </AccordionDetail>
          </AccordionItem>
          <AccordionItem>
            <AccordionSummary>Accordion Summary 2</AccordionSummary>
            <AccordionDetail>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quis eos nemo quaerat a quasi optio doloremque
                officiis, quo rem modi ex consectetur aliquid corporis unde
                assumenda hic excepturi quos.
              </div>
            </AccordionDetail>
          </AccordionItem>
          <AccordionItem>
            <AccordionSummary>Accordion Summary 3</AccordionSummary>
            <AccordionDetail>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate totam eos unde aperiam laboriosam enim libero impedit
                sit, quae aut excepturi pariatur iure fuga animi soluta
                reiciendis incidunt possimus asperiores?
              </div>
            </AccordionDetail>
          </AccordionItem>
          <AccordionItem>
            <AccordionSummary>Accordion Summary 4</AccordionSummary>
            <AccordionDetail>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
                cum porro autem at dignissimos sint dolor tenetur vitae, vero
                quam eveniet nihil quisquam ducimus sit, veritatis amet dolorem
                molestiae possimus.
              </div>
            </AccordionDetail>
          </AccordionItem>
        </Accordion>
      </Example>
    </DocumentLayout>
  )
}

export default AccordionPage
