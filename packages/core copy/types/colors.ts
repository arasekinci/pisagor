export type TemplateColorName<P extends string> =
  | `${P}100`
  | `${P}200`
  | `${P}300`
  | `${P}400`
  | `${P}500`
  | `${P}600`
  | `${P}700`
  | `${P}800`
  | `${P}900`
  | `${P}1000`

export type TemplateNeutralColorName<P extends string> =
  | `${P}0`
  | `${P}100`
  | `${P}100A`
  | `${P}200`
  | `${P}200A`
  | `${P}300`
  | `${P}300A`
  | `${P}400`
  | `${P}400A`
  | `${P}500`
  | `${P}500A`
  | `${P}600`
  | `${P}700`
  | `${P}800`
  | `${P}900`
  | `${P}1000`
  | `${P}1100`

export type BlueColorName = TemplateColorName<'B'>
export type GreenColorName = TemplateColorName<'G'>
export type MagentaColorName = TemplateColorName<'M'>
export type NeutralColorName = TemplateNeutralColorName<'N'>
export type DarkNeutralColorName = TemplateNeutralColorName<'N'>
export type OrangeColorName = TemplateColorName<'O'>
export type PurpleColorName = TemplateColorName<'P'>
export type RedColorName = TemplateColorName<'R'>
export type TealColorName = TemplateColorName<'T'>
export type YellowColorName = TemplateColorName<'Y'>

export type ColorPalatte =
  | BlueColorName
  | GreenColorName
  | MagentaColorName
  | NeutralColorName
  | DarkNeutralColorName
  | OrangeColorName
  | PurpleColorName
  | RedColorName
  | TealColorName
  | YellowColorName
