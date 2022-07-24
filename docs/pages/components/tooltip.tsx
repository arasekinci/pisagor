import type { NextPage } from 'next'
import Button from '@pisagor/button'
import Tooltip from '@pisagor/tooltip'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const TooltipPage: NextPage = () => {
  return (
    <DocumentLayout
      title={components.tooltip.title}
      description={components.tooltip.description}
    >
      <h4>Default</h4>
      <Example>
        <Tooltip content="Hello world">
          <Button>Hover over me</Button>
        </Tooltip>
      </Example>
    </DocumentLayout>
  )
}

export default TooltipPage
