/**
 * THIS FILE WAS CREATED VIA CODEGEN DO NOT MODIFY
 *
 * @command yarn build
 */

import { TOKEN_NOT_FOUND } from '../constants'

const tokens = {
  'blue.100': 'var(--B100)',
  'blue.200': 'var(--B200)',
  'blue.300': 'var(--B300)',
  'blue.400': 'var(--B400)',
  'blue.500': 'var(--B500)',
  'blue.600': 'var(--B600)',
  'blue.700': 'var(--B700)',
  'blue.800': 'var(--B800)',
  'blue.900': 'var(--B900)',
  'blue.1000': 'var(--B1000)',
  'green.100': 'var(--G100)',
  'green.200': 'var(--G200)',
  'green.300': 'var(--G300)',
  'green.400': 'var(--G400)',
  'green.500': 'var(--G500)',
  'green.600': 'var(--G600)',
  'green.700': 'var(--G700)',
  'green.800': 'var(--G800)',
  'green.900': 'var(--G900)',
  'green.1000': 'var(--G1000)',
  'magenta.100': 'var(--M100)',
  'magenta.200': 'var(--M200)',
  'magenta.300': 'var(--M300)',
  'magenta.400': 'var(--M400)',
  'magenta.500': 'var(--M500)',
  'magenta.600': 'var(--M600)',
  'magenta.700': 'var(--M700)',
  'magenta.800': 'var(--M800)',
  'magenta.900': 'var(--M900)',
  'magenta.1000': 'var(--M1000)',
  'neutral.0': 'var(--N0)',
  'neutral.100': 'var(--N100)',
  'neutral.100.alpha': 'var(--N100A)',
  'neutral.200': 'var(--N200)',
  'neutral.200.alpha': 'var(--N200A)',
  'neutral.300': 'var(--N300)',
  'neutral.300.alpha': 'var(--N300A)',
  'neutral.400': 'var(--N400)',
  'neutral.400.alpha': 'var(--N400A)',
  'neutral.500': 'var(--N500)',
  'neutral.500.alpha': 'var(--N500A)',
  'neutral.600': 'var(--N600)',
  'neutral.700': 'var(--N700)',
  'neutral.800': 'var(--N800)',
  'neutral.900': 'var(--N900)',
  'neutral.1000': 'var(--N1000)',
  'neutral.1100': 'var(--N1100)',
  'orange.100': 'var(--O100)',
  'orange.200': 'var(--O200)',
  'orange.300': 'var(--O300)',
  'orange.400': 'var(--O400)',
  'orange.500': 'var(--O500)',
  'orange.600': 'var(--O600)',
  'orange.700': 'var(--O700)',
  'orange.800': 'var(--O800)',
  'orange.900': 'var(--O900)',
  'orange.1000': 'var(--O1000)',
  'purple.100': 'var(--P100)',
  'purple.200': 'var(--P200)',
  'purple.300': 'var(--P300)',
  'purple.400': 'var(--P400)',
  'purple.500': 'var(--P500)',
  'purple.600': 'var(--P600)',
  'purple.700': 'var(--P700)',
  'purple.800': 'var(--P800)',
  'purple.900': 'var(--P900)',
  'purple.1000': 'var(--P1000)',
  'red.100': 'var(--R100)',
  'red.200': 'var(--R200)',
  'red.300': 'var(--R300)',
  'red.400': 'var(--R400)',
  'red.500': 'var(--R500)',
  'red.600': 'var(--R600)',
  'red.700': 'var(--R700)',
  'red.800': 'var(--R800)',
  'red.900': 'var(--R900)',
  'red.1000': 'var(--R1000)',
  'teal.100': 'var(--T100)',
  'teal.200': 'var(--T200)',
  'teal.300': 'var(--T300)',
  'teal.400': 'var(--T400)',
  'teal.500': 'var(--T500)',
  'teal.600': 'var(--T600)',
  'teal.700': 'var(--T700)',
  'teal.800': 'var(--T800)',
  'teal.900': 'var(--T900)',
  'teal.1000': 'var(--T1000)',
  'yellow.100': 'var(--Y100)',
  'yellow.200': 'var(--Y200)',
  'yellow.300': 'var(--Y300)',
  'yellow.400': 'var(--Y400)',
  'yellow.500': 'var(--Y500)',
  'yellow.600': 'var(--Y600)',
  'yellow.700': 'var(--Y700)',
  'yellow.800': 'var(--Y800)',
  'yellow.900': 'var(--Y900)',
  'yellow.1000': 'var(--Y1000)',
}

export function palette(name: keyof typeof tokens) {
  return tokens[name] || TOKEN_NOT_FOUND
}
