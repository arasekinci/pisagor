import type { AnchorProps } from '@/components/anchor'
import type { ImageProps } from '@/components/image'

export type CardType = 'presentation' | 'components' | 'foundation'

export interface CardProps extends AnchorProps {
  /**
   * The prop description will be added here.
   */
  type: CardType
  /**
   * The prop description will be added here.
   */
  image?: ImageProps
}
