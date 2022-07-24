type AlertAppearance = {
  background: string

  icon: {
    color: string
  }
}

type BadgeAppearance = {
  color: string
  background: string
}

type ButtonAppearance = {
  color: string
  background: string

  active: {
    color: string
    background: string
  }

  hover: {
    color: string
    background: string
  }
}

export type Theme = {
  alert: {
    color: string

    default: AlertAppearance
    error: AlertAppearance
    help: AlertAppearance
    info: AlertAppearance
    success: AlertAppearance
    warning: AlertAppearance
  }
  badge: {
    default: BadgeAppearance
    error: BadgeAppearance
    help: BadgeAppearance
    info: BadgeAppearance
    success: BadgeAppearance
    warning: BadgeAppearance
  }
  blanket: {
    background: string
  }
  breadcrumbs: {
    color: string

    hover: {
      color: string
    }
  }
  button: {
    default: ButtonAppearance
    error: ButtonAppearance
    help: ButtonAppearance
    info: ButtonAppearance
    success: ButtonAppearance
    warning: ButtonAppearance
  }
  popup: {
    background: string
    boxShadow: string
  }
  tooltip: {
    color: string
    background: string
  }
}
