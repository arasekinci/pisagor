import type { CardProps } from './Card.types'
import * as Style from './Card.styles'

const Card: React.FunctionComponent<CardProps> = ({
  type,
  title,
  image,
  children,
  ...rest
}) => {
  return (
    <Style.Root data-type={type} {...rest}>
      {image && <Style.Figure {...image} />}
      <Style.Body>
        {title && <Style.Title>{title}</Style.Title>}
        {children}
      </Style.Body>
    </Style.Root>
  )
}

export default Card
