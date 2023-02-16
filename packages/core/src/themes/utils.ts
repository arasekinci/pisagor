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

export const assign = <T>(target: T, ...sources: any[]): T => {
  const obj = { ...target } as any

  if (sources.length) {
    for (const source of sources) {
      if (source) {
        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            const item = source[key]

            if (item instanceof Object) {
              obj[key] = assign(obj[key], item)
            } else {
              obj[key] = item
            }
          }
        }
      }
    }
  }

  return obj
}
