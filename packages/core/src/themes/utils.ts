import type { Color, Status } from '../types'

export const convertStatusNameToColor = (
  color: Color,
  status?: Status
): Color => {
  switch (status) {
    case 'error':
      return 'red'
    case 'help':
      return 'purple'
    case 'info':
      return 'blue'
    case 'success':
      return 'green'
    case 'warning':
      return 'yellow'
    default:
      return color
  }
}
