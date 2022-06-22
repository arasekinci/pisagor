import type { NextPage } from 'next'

import type { ErrorProps } from './Error.types'
import styles from './Error.module.scss'

const Error: NextPage<ErrorProps> = ({ code, type, message }) => {
  return (
    <div className={styles.root}>
      <h1>{code}</h1>
      <h4>{type}</h4>
      <p>{message}</p>
      <a href="/">Turn back</a>
    </div>
  )
}

export default Error
