import type { PageHeaderProps } from './PageHeader.types'
import * as styles from './PageHeader.styles'

export const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
  actions,
  title,
  breadcrumbs,
  children,
  testId,
  ...rest
}) => {
  return (
    <div className={styles.root} data-testid={testId} {...rest}>
      {breadcrumbs}
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
      {children && <div className={styles.body}>{children}</div>}
    </div>
  )
}
