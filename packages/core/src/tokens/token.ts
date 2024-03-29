/**
 * THIS FILE WAS CREATED VIA CODEGEN DO NOT MODIFY
 *
 * @command yarn build
 */

import { TOKEN_NOT_FOUND } from '../constants'

const tokens = {
  'background.accent.neutral': 'var(--N100)',
  'background.accent.neutral.hover': 'var(--N200)',
  'background.accent.neutral.active': 'var(--N300)',
  'background.accent.neutral.bold': 'var(--N800)',
  'background.accent.neutral.bold.hover': 'var(--N900)',
  'background.accent.neutral.bold.active': 'var(--N1000)',
  'background.accent.blue': 'var(--B100)',
  'background.accent.blue.hover': 'var(--B200)',
  'background.accent.blue.active': 'var(--B300)',
  'background.accent.blue.bold': 'var(--B600)',
  'background.accent.blue.bold.hover': 'var(--B700)',
  'background.accent.blue.bold.active': 'var(--B800)',
  'background.accent.red': 'var(--R100)',
  'background.accent.red.hover': 'var(--R200)',
  'background.accent.red.active': 'var(--R300)',
  'background.accent.red.bold': 'var(--R600)',
  'background.accent.red.bold.hover': 'var(--R700)',
  'background.accent.red.bold.active': 'var(--R800)',
  'background.accent.orange': 'var(--O100)',
  'background.accent.orange.hover': 'var(--O200)',
  'background.accent.orange.active': 'var(--O300)',
  'background.accent.orange.bold': 'var(--O600)',
  'background.accent.orange.bold.hover': 'var(--O700)',
  'background.accent.orange.bold.active': 'var(--O800)',
  'background.accent.yellow': 'var(--Y100)',
  'background.accent.yellow.hover': 'var(--Y200)',
  'background.accent.yellow.active': 'var(--Y300)',
  'background.accent.yellow.bold': 'var(--Y600)',
  'background.accent.yellow.bold.hover': 'var(--Y700)',
  'background.accent.yellow.bold.active': 'var(--Y800)',
  'background.accent.green': 'var(--G100)',
  'background.accent.green.hover': 'var(--G200)',
  'background.accent.green.active': 'var(--G300)',
  'background.accent.green.bold': 'var(--G600)',
  'background.accent.green.bold.hover': 'var(--G700)',
  'background.accent.green.bold.active': 'var(--G800)',
  'background.accent.purple': 'var(--P100)',
  'background.accent.purple.hover': 'var(--P200)',
  'background.accent.purple.active': 'var(--P300)',
  'background.accent.purple.bold': 'var(--P600)',
  'background.accent.purple.bold.hover': 'var(--P700)',
  'background.accent.purple.bold.active': 'var(--P800)',
  'background.accent.teal': 'var(--T100)',
  'background.accent.teal.hover': 'var(--T200)',
  'background.accent.teal.active': 'var(--T300)',
  'background.accent.teal.bold': 'var(--T600)',
  'background.accent.teal.bold.hover': 'var(--T700)',
  'background.accent.teal.bold.active': 'var(--T800)',
  'background.accent.magenta': 'var(--M100)',
  'background.accent.magenta.hover': 'var(--M200)',
  'background.accent.magenta.active': 'var(--M300)',
  'background.accent.magenta.bold': 'var(--M600)',
  'background.accent.magenta.bold.hover': 'var(--M700)',
  'background.accent.magenta.bold.active': 'var(--M800)',
  'background.status.neutral': 'var(--N100)',
  'background.status.neutral.hover': 'var(--N200)',
  'background.status.neutral.active': 'var(--N300)',
  'background.status.neutral.bold': 'var(--N600)',
  'background.status.neutral.bold.hover': 'var(--N700)',
  'background.status.neutral.bold.active': 'var(--N800)',
  'background.status.error': 'var(--R100)',
  'background.status.error.hover': 'var(--R200)',
  'background.status.error.active': 'var(--R300)',
  'background.status.error.bold': 'var(--R600)',
  'background.status.error.bold.hover': 'var(--R700)',
  'background.status.error.bold.active': 'var(--R800)',
  'background.status.info': 'var(--B100)',
  'background.status.info.hover': 'var(--B200)',
  'background.status.info.active': 'var(--B300)',
  'background.status.info.bold': 'var(--B600)',
  'background.status.info.bold.hover': 'var(--B700)',
  'background.status.info.bold.active': 'var(--B800)',
  'background.status.help': 'var(--P100)',
  'background.status.help.hover': 'var(--P200)',
  'background.status.help.active': 'var(--P300)',
  'background.status.help.bold': 'var(--P600)',
  'background.status.help.bold.hover': 'var(--P700)',
  'background.status.help.bold.active': 'var(--P800)',
  'background.status.success': 'var(--G100)',
  'background.status.success.hover': 'var(--G200)',
  'background.status.success.active': 'var(--G300)',
  'background.status.success.bold': 'var(--G600)',
  'background.status.success.bold.hover': 'var(--G700)',
  'background.status.success.bold.active': 'var(--G800)',
  'background.status.warning': 'var(--Y100)',
  'background.status.warning.hover': 'var(--Y200)',
  'background.status.warning.active': 'var(--Y300)',
  'background.status.warning.bold': 'var(--Y600)',
  'background.status.warning.bold.hover': 'var(--Y700)',
  'background.status.warning.bold.active': 'var(--Y800)',
  'background.button.disabled': 'var(--N200A)',
  'background.button': 'var(--N0)',
  'background.button.hover': 'var(--N100)',
  'background.button.active': 'var(--N200)',
  'background.input.disabled': 'var(--N200A)',
  'background.input': 'var(--N0)',
  'background.input.hover': 'var(--N100)',
  'background.input.focus': 'var(--N0)',
  'background.blanket': 'var(--N500A)',
  'background.skeleton': 'var(--N200A)',
  'background.inverse': 'var(--N1000)',
  background: 'var(--N0)',
  'border.accent.blue': 'var(--B600)',
  'border.accent.blue.dark': 'var(--B800)',
  'border.accent.green': 'var(--G600)',
  'border.accent.green.dark': 'var(--G800)',
  'border.accent.magenta': 'var(--M600)',
  'border.accent.magenta.dark': 'var(--M800)',
  'border.accent.neutral': 'var(--N600)',
  'border.accent.neutral.dark': 'var(--N800)',
  'border.accent.orange': 'var(--O600)',
  'border.accent.orange.dark': 'var(--O800)',
  'border.accent.purple': 'var(--P600)',
  'border.accent.purple.dark': 'var(--P800)',
  'border.accent.red': 'var(--R600)',
  'border.accent.red.dark': 'var(--R800)',
  'border.accent.teal': 'var(--T600)',
  'border.accent.teal.dark': 'var(--T800)',
  'border.accent.yellow': 'var(--Y600)',
  'border.accent.yellow.dark': 'var(--Y800)',
  'border.status.error': 'var(--R600)',
  'border.status.help': 'var(--P600)',
  'border.status.info': 'var(--B600)',
  'border.status.neutral': 'var(--N600)',
  'border.status.success': 'var(--G600)',
  'border.status.warning': 'var(--Y600)',
  'border.input.disabled': 'var(--N200A)',
  'border.input': 'var(--N300A)',
  'border.input.hover': 'var(--N400A)',
  'border.input.focus': 'var(--B600)',
  border: 'var(--N300A)',
  'font.accent.blue': 'var(--B800)',
  'font.accent.blue.dark': 'var(--B1000)',
  'font.accent.green': 'var(--G800)',
  'font.accent.green.dark': 'var(--G1000)',
  'font.accent.magenta': 'var(--M800)',
  'font.accent.magenta.dark': 'var(--M1000)',
  'font.accent.neutral': 'var(--N800)',
  'font.accent.neutral.dark': 'var(--N1000)',
  'font.accent.orange': 'var(--O800)',
  'font.accent.orange.dark': 'var(--O1000)',
  'font.accent.purple': 'var(--P800)',
  'font.accent.purple.dark': 'var(--P1000)',
  'font.accent.red': 'var(--R800)',
  'font.accent.red.dark': 'var(--R1000)',
  'font.accent.teal': 'var(--T800)',
  'font.accent.teal.dark': 'var(--T1000)',
  'font.accent.yellow': 'var(--Y800)',
  'font.accent.yellow.dark': 'var(--Y1000)',
  'font.status.error': 'var(--R800)',
  'font.status.help': 'var(--P800)',
  'font.status.info': 'var(--B800)',
  'font.status.neutral': 'var(--N800)',
  'font.status.success': 'var(--G800)',
  'font.status.warning': 'var(--Y800)',
  'font.family': 'var(--font-family)',
  'font.family.code': 'var(--font-family-code)',
  'font.text': 'var(--N1000)',
  'font.text.inverse': 'var(--N0)',
  'font.text.disabled': 'var(--N400A)',
  'font.subtle': 'var(--N900)',
  'font.subtle.inverse': 'var(--N100)',
  'font.subtlest': 'var(--N700)',
  'font.subtlest.inverse': 'var(--N400)',
  'icon.accent.blue': 'var(--B700)',
  'icon.accent.blue.dark': 'var(--B900)',
  'icon.accent.green': 'var(--G700)',
  'icon.accent.green.dark': 'var(--G900)',
  'icon.accent.magenta': 'var(--M700)',
  'icon.accent.magenta.dark': 'var(--M900)',
  'icon.accent.neutral': 'var(--N700)',
  'icon.accent.neutral.dark': 'var(--N900)',
  'icon.accent.orange': 'var(--O700)',
  'icon.accent.orange.dark': 'var(--O900)',
  'icon.accent.purple': 'var(--P700)',
  'icon.accent.purple.dark': 'var(--P900)',
  'icon.accent.red': 'var(--R700)',
  'icon.accent.red.dark': 'var(--R900)',
  'icon.accent.teal': 'var(--T700)',
  'icon.accent.teal.dark': 'var(--T900)',
  'icon.accent.yellow': 'var(--Y700)',
  'icon.accent.yellow.dark': 'var(--Y900)',
  'icon.status.error': 'var(--R700)',
  'icon.status.help': 'var(--P700)',
  'icon.status.info': 'var(--B700)',
  'icon.status.neutral': 'var(--N700)',
  'icon.status.success': 'var(--G700)',
  'icon.status.warning': 'var(--Y700)',
  'icon.inverse': 'var(--N200)',
  icon: 'var(--N800)',
  'shadow.overlay': 'var(--shadow-overlay)',
  shadow: 'var(--shadow)',
}

export function token(name: keyof typeof tokens) {
  return tokens[name] || TOKEN_NOT_FOUND
}
