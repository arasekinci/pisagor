import React from 'react'
import { classnames } from 'begonya/functions'

import { useAccordion } from '../../core/context'
import type { AccordionDetailProps } from './accordion-detail.types'
import * as styles from './accordion-detail.styles'

export const AccordionDetail: React.FunctionComponent<AccordionDetailProps> = ({
  children,
  className,
  id,
  testId,
  ...rest
}) => {
  const accordion = useAccordion()
  const classNames = classnames(styles.root, className)
  const expended = id ? accordion.state.includes(id) : false

  return (
    <div
      id={`${id}-content`}
      className={classNames}
      role="region"
      aria-labelledby={`${id}-summary`}
      aria-hidden={!expended}
      tabIndex={-1}
      data-testid={testId}
      {...rest}
    >
      {children}
    </div>
  )
}
