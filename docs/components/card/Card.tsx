import Anchor from '@/components/anchor'
import Image from '@/components/image'

import type { CardProps } from './Card.types'
import * as styles from './Card.styles'

const Card: React.FunctionComponent<CardProps> = ({
  type,
  title,
  image,
  children,
  ...rest
}) => {
  return (
    <Anchor className={styles.root} data-type={type} {...rest}>
      {image && <Image className={styles.figure} alt={title} {...image} />}
      <div className={styles.body}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {children}
      </div>
    </Anchor>
  )
}

export default Card
