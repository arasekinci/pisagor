import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import type { AnchorProps } from './Anchor.types'

const Anchor: React.ForwardRefRenderFunction<HTMLAnchorElement, AnchorProps> = (
  { children, link, href, ...rest },
  ref
) => {
  const router = useRouter()
  const isCurrent = router.asPath === href

  const anchor = (
    <a ref={ref} aria-current={isCurrent ? 'page' : 'false'} {...rest}>
      {children}
    </a>
  )

  if (href) {
    return (
      <Link href={href} {...link}>
        {anchor}
      </Link>
    )
  }

  return anchor
}

export default React.forwardRef(Anchor)
