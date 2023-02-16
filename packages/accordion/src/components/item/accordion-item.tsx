import React from 'react'
import { classnames } from 'begonya/functions'

// import { useAccordion } from '../../core/context'
import type { AccordionItemProps } from './accordion-item.types'
import * as styles from './accordion-item.styles'

export const AccordionItem: React.FunctionComponent<AccordionItemProps> = ({
  children,
  className,
  id,
  testId,
  ...rest
}) => {
  const classNames = classnames(styles.root, className)

  return (
    <div id={id} className={classNames} data-testid={testId} {...rest}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement<any>(child, {
            id,
          })
        }
      })}
    </div>
  )
}
