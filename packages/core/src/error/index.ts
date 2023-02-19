import type { PackageName } from '../types'
import { getPackageName } from '../utils'

export default function error(name: PackageName, message: string) {
  throw new Error(`${getPackageName(name)}: ${message}`)
}
