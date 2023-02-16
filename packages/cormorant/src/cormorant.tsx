import React from 'react'

import type { CormorantProps } from './cormorant.types'

const Cormorant: React.FunctionComponent<CormorantProps> = ({
  condition,
  children,
}) => {
  return <>{condition ? children : null}</>
}

export default Cormorant
