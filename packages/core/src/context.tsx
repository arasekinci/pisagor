import React, { Fragment, useContext } from 'react'
import { ThemeProvider, ThemeContext } from '@emotion/react'

import type { PisagorProviderProps, PisagorContextValue, Theme } from './types'
import { B100, B300, B400, B50, N10, N20, N30, N40, R300 } from './colors'

export const PisagorContext = React.createContext<PisagorContextValue | null>(
  null
)

export const PisagorProvider: React.FunctionComponent<PisagorProviderProps> = ({
  theme,
  children,
}) => {
  const value: PisagorContextValue = {}

  return (
    <Fragment>
      <style>{`:root {
        --alert-color: ${theme.alert.color};
        --alert-default-background: ${theme.alert.default.background};
        --alert-error-background: ${theme.alert.error.background};
        --alert-help-background: ${theme.alert.help.background};
        --alert-info-background: ${theme.alert.info.background};
        --alert-success-background: ${theme.alert.success.background};
        --alert-warning-background: ${theme.alert.warning.background};

        --badge-default-background: ${theme.badge.default.background};
        --badge-default-color: ${theme.badge.default.color};
        --badge-error-background: ${theme.badge.error.background};
        --badge-error-color: ${theme.badge.error.color};
        --badge-help-background: ${theme.badge.help.background};
        --badge-help-color: ${theme.badge.help.color};
        --badge-info-background: ${theme.badge.info.background};
        --badge-info-color: ${theme.badge.info.color};
        --badge-success-background: ${theme.badge.success.background};
        --badge-success-color: ${theme.badge.success.color};
        --badge-warning-background: ${theme.badge.warning.background};
        --badge-warning-color: ${theme.badge.warning.color};

        --blanket-background: ${theme.blanket.background};

        --breadcrumbs-color-hover: ${theme.breadcrumbs.hover.color};
        --breadcrumbs-color: ${theme.breadcrumbs.color};

        --button-default-background-active: ${theme.button.default.active.background};
        --button-default-background-hover: ${theme.button.default.hover.background};
        --button-default-background: ${theme.button.default.background};
        --button-default-color-active: ${theme.button.default.active.color};
        --button-default-color-hover: ${theme.button.default.hover.color};
        --button-default-color: ${theme.button.default.color};
        --button-error-background-active: ${theme.button.error.active.background};
        --button-error-background-hover: ${theme.button.error.hover.background};
        --button-error-background: ${theme.button.error.background};
        --button-error-color-active: ${theme.button.error.active.color};
        --button-error-color-hover: ${theme.button.error.hover.color};
        --button-error-color: ${theme.button.error.color};
        --button-help-background-active: ${theme.button.help.active.background};
        --button-help-background-hover: ${theme.button.help.hover.background};
        --button-help-background: ${theme.button.help.background};
        --button-help-color-active: ${theme.button.help.active.color};
        --button-help-color-hover: ${theme.button.help.hover.color};
        --button-help-color: ${theme.button.help.color};
        --button-info-background-active: ${theme.button.info.active.background};
        --button-info-background-hover: ${theme.button.info.hover.background};
        --button-info-background: ${theme.button.info.background};
        --button-info-color-active: ${theme.button.info.active.color};
        --button-info-color-hover: ${theme.button.info.hover.color};
        --button-info-color: ${theme.button.info.color};
        --button-success-background-active: ${theme.button.success.active.background};
        --button-success-background-hover: ${theme.button.success.hover.background};
        --button-success-background: ${theme.button.success.background};
        --button-success-color-active: ${theme.button.success.active.color};
        --button-success-color-hover: ${theme.button.success.hover.color};
        --button-success-color: ${theme.button.success.color};
        --button-warning-background-active: ${theme.button.warning.active.background};
        --button-warning-background-hover: ${theme.button.warning.hover.background};
        --button-warning-background: ${theme.button.warning.background};
        --button-warning-color-active: ${theme.button.warning.active.color};
        --button-warning-color-hover: ${theme.button.warning.hover.color};
        --button-warning-color: ${theme.button.warning.color};

        --checkbox-background-active: ${B50};
        --checkbox-background-checked-hover: ${B300};
        --checkbox-background-checked: ${B400};
        --checkbox-background-disabled: ${N20};
        --checkbox-background-hover: ${N30};
        --checkbox-background: ${N10};
        --checkbox-border-active: ${B50};
        --checkbox-border-checked-hover: ${B300};
        --checkbox-border-checked-invalid: ${R300};
        --checkbox-border-checked: ${B400};
        --checkbox-border-disabled: ${N20};
        --checkbox-border-focus: ${B100};
        --checkbox-border-hover: ${N40};
        --checkbox-border-invalid: ${R300};
        --checkbox-border: ${N40};

        --popup-background: ${theme.popup.background};
        --popup-box-shadow: ${theme.popup.boxShadow};

        --tooltip-background: ${theme.tooltip.background};
        --tooltip-color: ${theme.tooltip.color};
      }`}</style>
      <PisagorContext.Provider value={value}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PisagorContext.Provider>
    </Fragment>
  )
}

export const usePisagor = (): PisagorContextValue => {
  const pisagor = useContext(PisagorContext)

  if (pisagor) {
    return pisagor
  }

  throw new Error('usePisagor must be used within a PisagorProvider.')
}

export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext) as Theme

  if (theme) {
    return theme
  }

  throw new Error('useTheme must be used within a PisagorProvider.')
}
