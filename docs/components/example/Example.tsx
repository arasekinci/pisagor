import type { ExampleProps } from './Example.types'
import styles from './Example.module.scss'

const Example: React.FunctionComponent<ExampleProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>
}

export default Example
