import React from 'react'
import { classnames } from 'begonya/functions'

import { AccordionProvider } from './core/context'
import type { AccordionProps } from './accordion.types'
import * as styles from './accordion.styles'

const Accordion: React.FunctionComponent<AccordionProps> = ({
  children,
  className,
  collapse = false,
  id,
  testId,
  ...rest
}) => {
  // const expandedState = defaultExpanded || null
  // const [isExpanded, setIsExpanded] = useState<number | null>(expandedState)
  const classNames = classnames(styles.root, className)

  // const toggle = useCallback((index: number) => {
  //   setExpanded((prevState) => {
  //     if (prevState === index) {
  //       return null
  //     }

  //     return index
  //   })
  // }, [])

  // const open = useCallback(() => {}, [])

  const renderChildren = () => {
    const elements = React.Children.toArray(children).filter(Boolean)

    return elements.map((element, index) => {
      if (React.isValidElement(element)) {
        return React.cloneElement<any>(element, {
          id: `${id}-item${index}`,
        })
      }
    })
  }

  return (
    <div
      id={id}
      className={classNames}
      role="presentation"
      data-testid={testId}
      {...rest}
    >
      <AccordionProvider id={id} collapse={collapse}>
        {renderChildren()}
      </AccordionProvider>
    </div>
  )
}

export default Accordion
