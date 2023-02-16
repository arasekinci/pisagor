import React from 'react'
import { classnames } from 'begonya/functions'
import Icon from '@pisagor/icon'

import { useAccordion } from '../../core/context'
import type { AccordionSummaryProps } from './accordion-summary.types'
import * as styles from './accordion-summary.styles'

export const AccordionSummary: React.FunctionComponent<
  AccordionSummaryProps
> = ({ children, id, className, testId, ...rest }) => {
  const accordion = useAccordion()
  const classNames = classnames(styles.root, className)
  const expended = id ? accordion.state.includes(id) : false

  const trigger = () => {
    if (id) {
      if (expended) {
        accordion.close(id)
      } else {
        accordion.open(id)
      }
    }
  }

  const handleClick = () => {
    trigger()
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const key = event.key

    if ([' ', 'Enter'].includes(key)) {
      trigger()
    }
  }

  return (
    <div
      id={`${id}-summary`}
      className={classNames}
      role="button"
      aria-controls={`${id}-content`}
      aria-expanded={expended}
      tabIndex={0}
      data-testid={testId}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <span>{children}</span>
      <Icon name="expand-more" />
    </div>
  )
}
