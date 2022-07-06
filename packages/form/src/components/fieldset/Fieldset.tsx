import type { FieldsetProps } from './Fieldset.types'
import * as styles from './Fieldset.styles'

export const Fieldset: React.FunctionComponent<FieldsetProps> = ({
  children,
  title,
  description,
  testId,
  ...rest
}) => {
  return (
    <fieldset data-testid={testId && `${testId}-fieldset`} {...rest}>
      {title || description ? (
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {description && (
            <div className={styles.description}>{description}</div>
          )}
        </div>
      ) : null}
      {children}
    </fieldset>
  )
}
