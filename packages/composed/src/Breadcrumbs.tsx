import BreadcrumbsBase, { BreadcrumbsItem } from '@pisagor/breadcrumbs'

import type { BreadcrumbsProps } from './Breadcrumbs.types'

export type { BreadcrumbsProps }

const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({
  items = [],
  testId,
  ...rest
}) => {
  return (
    <BreadcrumbsBase testId={testId} {...rest}>
      {items.map((item, index) => (
        <BreadcrumbsItem key={index} testId={testId} {...item} />
      ))}
    </BreadcrumbsBase>
  )
}

export default Breadcrumbs
