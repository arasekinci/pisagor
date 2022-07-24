import type { HTMLAttributes, ReactNode } from 'react'

export type AvatarPresence = 'online' | 'busy' | 'focus' | 'offline'

export type AvatarShape = 'circle' | 'square'

export type AvatarSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'

export type AvatarStatus = 'approved' | 'declined' | 'locked'

export type AvatarAttributes = HTMLAttributes<HTMLElement>

export interface AvatarProps extends AvatarAttributes {
  /**
   * Provides alt text for the avatar image.
   */
  children?: string
  /**
   * Provides alt text for the avatar image.
   */
  name?: string
  /**
   * Indicates a user's online status by showing a small icon on the avatar.
   * Refer to presence values on the Presence component.
   * Alternatively accepts any React element. For best results, it is recommended to
   * use square content with height and width of 100%.
   */
  presence?: AvatarPresence
  /**
   * The prop description will be added here.
   */
  shape?: AvatarShape
  /**
   * The prop description will be added here.
   */
  size?: AvatarSize
  /**
   * A url to load an image from (this can also be a base64 encoded image).
   */
  src?: string
  /**
   * Indicates contextual information by showing a small icon on the avatar.
   * Refer to status values on the Status component.
   */
  status?: AvatarStatus
  /**
   * A `testId` prop is provided for specified elements, which is a unique string that
   * appears as a data attribute `data-testid` in the rendered code,
   * serving as a hook for automated tests.
   */
  testId?: string
}
