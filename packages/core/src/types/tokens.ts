type AccentToken =
  | 'accent.blue.light'
  | 'accent.blue'
  | 'accent.blue.dark'
  | 'accent.green.light'
  | 'accent.green'
  | 'accent.green.dark'
  | 'accent.magenta.light'
  | 'accent.magenta'
  | 'accent.magenta.dark'
  | 'accent.neutral.light'
  | 'accent.neutral'
  | 'accent.neutral.dark'
  | 'accent.orange.light'
  | 'accent.orange'
  | 'accent.orange.dark'
  | 'accent.purple.light'
  | 'accent.purple'
  | 'accent.purple.dark'
  | 'accent.red.light'
  | 'accent.red'
  | 'accent.red.dark'
  | 'accent.teal.light'
  | 'accent.teal'
  | 'accent.teal.dark'
  | 'accent.yellow.light'
  | 'accent.yellow'
  | 'accent.yellow.dark'

type StatusToken = 'error' | 'help' | 'info' | 'neutral' | 'success' | 'warning'

type BackgroundAccentTokenTemplate<K extends string> =
  | `accent.${K}.lighter`
  | `accent.${K}.light`
  | `accent.${K}`
  | `accent.${K}.bold`
  | `accent.${K}.bolder`

type BackgroundStatusTokenTemplate<K extends string> =
  | `${K}`
  | `${K}.hover`
  | `${K}.active`
  | `${K}.bold`
  | `${K}.bold.hover`
  | `${K}.bold.active`

type PaletteNameTemplate<K extends string> =
  | `${K}.100`
  | `${K}.200`
  | `${K}.300`
  | `${K}.400`
  | `${K}.500`
  | `${K}.600`
  | `${K}.700`
  | `${K}.800`
  | `${K}.900`
  | `${K}.1000`

export type BackgroundToken =
  | BackgroundAccentTokenTemplate<'neutral'>
  | BackgroundAccentTokenTemplate<'blue'>
  | BackgroundAccentTokenTemplate<'red'>
  | BackgroundAccentTokenTemplate<'orange'>
  | BackgroundAccentTokenTemplate<'yellow'>
  | BackgroundAccentTokenTemplate<'green'>
  | BackgroundAccentTokenTemplate<'purple'>
  | BackgroundAccentTokenTemplate<'teal'>
  | BackgroundAccentTokenTemplate<'magenta'>
  | BackgroundStatusTokenTemplate<'neutral'>
  | BackgroundStatusTokenTemplate<'error'>
  | BackgroundStatusTokenTemplate<'info'>
  | BackgroundStatusTokenTemplate<'help'>
  | BackgroundStatusTokenTemplate<'success'>
  | BackgroundStatusTokenTemplate<'warning'>
  | 'button.active'
  | 'button.hover'
  | 'button'
  | 'input.active'
  | 'input.hover'
  | 'input'
  | 'blanket'
  | 'skeleton'
  | 'inverse'
  | 'default'

export type BorderToken =
  | AccentToken
  | StatusToken
  | 'input'
  | 'bold'
  | 'disabled'
  | 'focus'
  | 'active'
  | 'default'

export type FontToken =
  | AccentToken
  | StatusToken
  | 'text:disabled'
  | 'text'
  | 'text.inverse'
  | 'subtle'
  | 'subtle.inverse'
  | 'subtlest'
  | 'subtlest.inverse'

export type IconToken = AccentToken | StatusToken | 'inverse' | 'default'

export type ShadowToken = 'overlay' | 'default'

export type LayerToken =
  | 'card'
  | 'navigation'
  | 'dialog'
  | 'layer'
  | 'blanket'
  | 'modal'
  | 'flag'
  | 'spotlight'
  | 'tooltip'

export type PaletteToken =
  | PaletteNameTemplate<'blue'>
  | PaletteNameTemplate<'green'>
  | PaletteNameTemplate<'magenta'>
  | PaletteNameTemplate<'orange'>
  | PaletteNameTemplate<'purple'>
  | PaletteNameTemplate<'red'>
  | PaletteNameTemplate<'teal'>
  | PaletteNameTemplate<'yellow'>
  | PaletteNameTemplate<'neutral'>
  | 'neutral.0'
  | 'neutral.100.alpha'
  | 'neutral.200.alpha'
  | 'neutral.300.alpha'
  | 'neutral.400.alpha'
  | 'neutral.500.alpha'
  | 'neutral.1100'
