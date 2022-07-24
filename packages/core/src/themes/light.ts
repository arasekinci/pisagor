import type { Theme } from '../types'
import {
  B300,
  B400,
  B50,
  B500,
  G300,
  G400,
  G50,
  G500,
  N0,
  N100A,
  N30,
  N300,
  N40,
  N500,
  N50A,
  N60,
  N700,
  N800,
  P300,
  P400,
  P50,
  P500,
  R300,
  R400,
  R50,
  R500,
  Y300,
  Y400,
  Y50,
  Y500,
} from '../colors'

export const light: Theme = {
  alert: {
    color: N800,
    default: {
      background: N30,
      icon: {
        color: N700,
      },
    },
    error: {
      background: R50,
      icon: {
        color: R500,
      },
    },
    help: {
      background: P50,
      icon: {
        color: P500,
      },
    },
    info: {
      background: B50,
      icon: {
        color: B500,
      },
    },
    success: {
      background: G50,
      icon: {
        color: G500,
      },
    },
    warning: {
      background: Y50,
      icon: {
        color: Y500,
      },
    },
  },
  badge: {
    default: {
      color: N700,
      background: N30,
    },
    error: {
      color: R500,
      background: R50,
    },
    help: {
      color: P500,
      background: P50,
    },
    info: {
      color: B500,
      background: B50,
    },
    success: {
      color: G500,
      background: G50,
    },
    warning: {
      color: Y500,
      background: Y50,
    },
  },
  blanket: {
    background: N100A,
  },
  breadcrumbs: {
    color: N300,
    hover: {
      color: N700,
    },
  },
  button: {
    default: {
      color: N500,
      background: N30,
      active: {
        color: N500,
        background: N60,
      },
      hover: {
        color: N500,
        background: N40,
      },
    },
    error: {
      color: N0,
      background: R400,
      active: {
        color: N0,
        background: R500,
      },
      hover: {
        color: N0,
        background: R300,
      },
    },
    help: {
      color: N0,
      background: P400,
      active: {
        color: N0,
        background: P500,
      },
      hover: {
        color: N0,
        background: P300,
      },
    },
    info: {
      color: N0,
      background: B400,
      active: {
        color: N0,
        background: B500,
      },
      hover: {
        color: N0,
        background: B300,
      },
    },
    success: {
      color: N0,
      background: G400,
      active: {
        color: N0,
        background: G500,
      },
      hover: {
        color: N0,
        background: G300,
      },
    },
    warning: {
      color: N0,
      background: Y400,
      active: {
        color: N0,
        background: Y500,
      },
      hover: {
        color: N0,
        background: Y300,
      },
    },
  },
  popup: {
    background: N0,
    boxShadow: N50A,
  },
  tooltip: {
    background: N800,
    color: N0,
  },
}
