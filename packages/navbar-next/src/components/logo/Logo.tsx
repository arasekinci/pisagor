import type { LogoProps } from './Logo.types'
import IconButton from '../icon-button'

export const Logo: React.FunctionComponent<LogoProps> = (props) => {
  return <IconButton {...props}>Logo</IconButton>
}
