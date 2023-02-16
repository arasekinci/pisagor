import type { SVGProps } from 'react'

export type AvatarPresencePresence = 'online' | 'busy' | 'focus' | 'offline'

export type AvatarPresenceStatus = 'approved' | 'declined' | 'locked'

export interface AvatarPresenceProps extends SVGProps<SVGSVGElement> {
  /**
   * Indicates a user's online status by showing a small icon on the avatar.
   * Refer to presence values on the Presence component.
   * Alternatively accepts any React element. For best results, it is recommended to
   * use square content with height and width of 100%.
   */
  presence: AvatarPresencePresence
  /**
   * Indicates contextual information by showing a small icon on the avatar.
   * Refer to status values on the Status component.
   */
  status?: AvatarPresenceStatus
  /**
   * A `testId` prop is provided for specified elements, which is a unique string that
   * appears as a data attribute `data-testid` in the rendered code,
   * serving as a hook for automated tests.
   */
  testId?: string
}
