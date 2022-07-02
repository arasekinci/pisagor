import { css } from '@emotion/css'
import { colors } from '@pisagor/core'

export const root = css({
  alignItems: 'baseline',
  border: '0',
  margin: '0 2px',
  boxSizing: 'border-box',
  display: 'inline-flex',
  fontStyle: 'normal',
  fontWeight: '500',
  maxWidth: '100%',
  borderRadius: 3,
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  transition:
    'background 0.1s ease-out,box-shadow 0.15s cubic-bezier(0.47,0.03,0.49,1.38)',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  verticalAlign: 'middle',
  width: 'auto',
  justifyContent: 'center',
})

export const appearance = {
  default: css({
    color: colors.N500,
    backgroundColor: colors.N30,
  }),
  error: css({
    color: colors.N0,
    backgroundColor: colors.R400,
  }),
  help: css({
    color: colors.N0,
    backgroundColor: colors.P400,
  }),
  info: css({
    color: colors.N0,
    backgroundColor: colors.B400,
  }),
  success: css({
    color: colors.N0,
    backgroundColor: colors.G400,
  }),
  warning: css({
    color: colors.N0,
    backgroundColor: colors.Y400,
  }),
}

export const size = {
  large: css({
    fontSize: 15,
    minWidth: '40px',
    minHeight: '40px',
    lineHeight: '40px',
    padding: '0 16px',
  }),
  medium: css({
    fontSize: 14,
    minWidth: '32px',
    minHeight: '32px',
    lineHeight: '32px',
    padding: '0 12px',
  }),
  small: css({
    fontSize: 13,
    minWidth: '24px',
    minHeight: '24px',
    lineHeight: '24px',
    padding: '0 8px',
  }),
}

// type CSS<P = any> = (
//   props?: Partial<P> | null,
//   style?: React.CSSProperties | undefined
// ) => string

// export const common: CSS = (props, style) =>
//   css({
//     color: 'pink',
//     ...style,
//   })
