import type { NextPage } from 'next'
import { useState } from 'react'
import Button from '@pisagor/button'
import Popup, { PopupPlacement } from '@pisagor/popup'

import { components } from '@/constants/definitions'
import Example from '@/components/example'
import DocumentLayout from '@/layouts/document'

const placements: PopupPlacement[] = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
  'auto',
  'auto-start',
  'auto-end',
]

const style = {
  width: 220,
  padding: 16,
}

const PopupPage: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [placement, setPlacement] = useState<PopupPlacement | null>(null)

  return (
    <DocumentLayout
      title={components.popup.title}
      description={components.popup.description}
    >
      <h4>Default</h4>
      <Example>
        <Popup
          isOpen={isOpen}
          style={style}
          trigger={(props) => (
            <Button onClick={() => setIsOpen(!isOpen)} {...props}>
              Open popup
            </Button>
          )}
        >
          <p>Popup content</p>
        </Popup>
      </Example>
      <h4>Placement</h4>
      <Example>
        <div
          style={{
            display: 'grid',
            gap: 8,
            gridTemplateColumns: 'auto auto auto auto',
          }}
        >
          {placements.map((name) => {
            const active = name === placement

            return (
              <Popup
                key={name}
                isOpen={active}
                style={style}
                placement={name}
                trigger={(props) => (
                  <Button
                    appearance={active ? 'info' : 'default'}
                    onClick={() => setPlacement(active ? null : name)}
                    {...props}
                  >
                    Open {name}
                  </Button>
                )}
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  itaque magnam eum?
                </p>
              </Popup>
            )
          })}
        </div>
      </Example>
    </DocumentLayout>
  )
}

export default PopupPage
