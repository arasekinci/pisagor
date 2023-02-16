import * as colors from '../colors'

export const global = `
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  --font-family-code: 'SFMono-Medium', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace;
`

export const light = `
  --B100: ${colors.B100};
  --B200: ${colors.B200};
  --B300: ${colors.B300};
  --B400: ${colors.B400};
  --B500: ${colors.B500};
  --B600: ${colors.B600};
  --B700: ${colors.B700};
  --B800: ${colors.B800};
  --B900: ${colors.B900};
  --B1000: ${colors.B1000};

  --G100: ${colors.G100};
  --G200: ${colors.G200};
  --G300: ${colors.G300};
  --G400: ${colors.G400};
  --G500: ${colors.G500};
  --G600: ${colors.G600};
  --G700: ${colors.G700};
  --G800: ${colors.G800};
  --G900: ${colors.G900};
  --G1000: ${colors.G1000};

  --M100: ${colors.M100};
  --M200: ${colors.M200};
  --M300: ${colors.M300};
  --M400: ${colors.M400};
  --M500: ${colors.M500};
  --M600: ${colors.M600};
  --M700: ${colors.M700};
  --M800: ${colors.M800};
  --M900: ${colors.M900};
  --M1000: ${colors.M1000};

  --N0: ${colors.N0};
  --N100: ${colors.N100};
  --N100A: ${colors.N100A};
  --N200: ${colors.N200};
  --N200A: ${colors.N200A};
  --N300: ${colors.N300};
  --N300A: ${colors.N300A};
  --N400: ${colors.N400};
  --N400A: ${colors.N400A};
  --N500: ${colors.N500};
  --N500A: ${colors.N500A};
  --N600: ${colors.N600};
  --N700: ${colors.N700};
  --N800: ${colors.N800};
  --N900: ${colors.N900};
  --N1000: ${colors.N1000};
  --N1100: ${colors.N1100};

  --O100: ${colors.O100};
  --O200: ${colors.O200};
  --O300: ${colors.O300};
  --O400: ${colors.O400};
  --O500: ${colors.O500};
  --O600: ${colors.O600};
  --O700: ${colors.O700};
  --O800: ${colors.O800};
  --O900: ${colors.O900};
  --O1000: ${colors.O1000};

  --P100: ${colors.P100};
  --P200: ${colors.P200};
  --P300: ${colors.P300};
  --P400: ${colors.P400};
  --P500: ${colors.P500};
  --P600: ${colors.P600};
  --P700: ${colors.P700};
  --P800: ${colors.P800};
  --P900: ${colors.P900};
  --P1000: ${colors.P1000};

  --R100: ${colors.R100};
  --R200: ${colors.R200};
  --R300: ${colors.R300};
  --R400: ${colors.R400};
  --R500: ${colors.R500};
  --R600: ${colors.R600};
  --R700: ${colors.R700};
  --R800: ${colors.R800};
  --R900: ${colors.R900};
  --R1000: ${colors.R1000};

  --T100: ${colors.T100};
  --T200: ${colors.T200};
  --T300: ${colors.T300};
  --T400: ${colors.T400};
  --T500: ${colors.T500};
  --T600: ${colors.T600};
  --T700: ${colors.T700};
  --T800: ${colors.T800};
  --T900: ${colors.T900};
  --T1000: ${colors.T1000};

  --Y100: ${colors.Y100};
  --Y200: ${colors.Y200};
  --Y300: ${colors.Y300};
  --Y400: ${colors.Y400};
  --Y500: ${colors.Y500};
  --Y600: ${colors.Y600};
  --Y700: ${colors.Y700};
  --Y800: ${colors.Y800};
  --Y900: ${colors.Y900};
  --Y1000: ${colors.Y1000};

  --shadow-overlay: 0px 8px 12px rgba(9, 30, 66, 0.15),0px 0px 1px rgba(9, 30, 66, 0.31);
  --shadow: 0px 0px 8px rgba(9, 30, 66, 0.16), 0px 0px 1px rgba(9, 30, 66, 0.12);
`

export const dark = `
  --B100: ${colors.B1000};
  --B200: ${colors.B900};
  --B300: ${colors.B800};
  --B400: ${colors.B700};
  --B500: ${colors.B600};
  --B600: ${colors.B500};
  --B700: ${colors.B400};
  --B800: ${colors.B300};
  --B900: ${colors.B200};
  --B1000: ${colors.B100};

  --G100: ${colors.G1000};
  --G200: ${colors.G900};
  --G300: ${colors.G800};
  --G400: ${colors.G700};
  --G500: ${colors.G600};
  --G600: ${colors.G500};
  --G700: ${colors.G400};
  --G800: ${colors.G300};
  --G900: ${colors.G200};
  --G1000: ${colors.G100};

  --M100: ${colors.M1000};
  --M200: ${colors.M900};
  --M300: ${colors.M800};
  --M400: ${colors.M700};
  --M500: ${colors.M600};
  --M600: ${colors.M500};
  --M700: ${colors.M400};
  --M800: ${colors.M300};
  --M900: ${colors.M200};
  --M1000: ${colors.M100};

  --N0: ${colors.DN0};
  --N100: ${colors.DN100};
  --N100A: ${colors.DN100A};
  --N200: ${colors.DN200};
  --N200A: ${colors.DN200A};
  --N300: ${colors.DN300};
  --N300A: ${colors.DN300A};
  --N400: ${colors.DN400};
  --N400A: ${colors.DN400A};
  --N500: ${colors.DN500};
  --N500A: ${colors.DN500A};
  --N600: ${colors.DN600};
  --N700: ${colors.DN700};
  --N800: ${colors.DN800};
  --N900: ${colors.DN900};
  --N1000: ${colors.DN1000};
  --N1100: ${colors.DN1100};

  --O100: ${colors.O1000};
  --O200: ${colors.O900};
  --O300: ${colors.O800};
  --O400: ${colors.O700};
  --O500: ${colors.O600};
  --O600: ${colors.O500};
  --O700: ${colors.O400};
  --O800: ${colors.O300};
  --O900: ${colors.O200};
  --O1000: ${colors.O100};

  --P100: ${colors.P1000};
  --P200: ${colors.P900};
  --P300: ${colors.P800};
  --P400: ${colors.P700};
  --P500: ${colors.P600};
  --P600: ${colors.P500};
  --P700: ${colors.P400};
  --P800: ${colors.P300};
  --P900: ${colors.P200};
  --P1000: ${colors.P100};

  --R100: ${colors.R1000};
  --R200: ${colors.R900};
  --R300: ${colors.R800};
  --R400: ${colors.R700};
  --R500: ${colors.R600};
  --R600: ${colors.R500};
  --R700: ${colors.R400};
  --R800: ${colors.R300};
  --R900: ${colors.R200};
  --R1000: ${colors.R100};

  --T100: ${colors.T1000};
  --T200: ${colors.T900};
  --T300: ${colors.T800};
  --T400: ${colors.T700};
  --T500: ${colors.T600};
  --T600: ${colors.T500};
  --T700: ${colors.T400};
  --T800: ${colors.T300};
  --T900: ${colors.T200};
  --T1000: ${colors.T100};

  --Y100: ${colors.Y1000};
  --Y200: ${colors.Y900};
  --Y300: ${colors.Y800};
  --Y400: ${colors.Y700};
  --Y500: ${colors.Y600};
  --Y600: ${colors.Y500};
  --Y700: ${colors.Y400};
  --Y800: ${colors.Y300};
  --Y900: ${colors.Y200};
  --Y1000: ${colors.Y100};

  --shadow-overlay: 0px 0px 0px rgba(188, 214, 240, 0.04), 0px 8px 12px rgba(3, 4, 4, 0.36), 0px 0px 1px rgba(3, 4, 4, 0.5);
  --shadow: 0px 0px 12px rgba(3, 4, 4, 0.56), 0px 0px 1px rgba(3, 4, 4, 0.5);
`
