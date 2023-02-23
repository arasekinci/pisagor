import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const root = css({
  fontSize: '1em',
})

export const inputgroup = (checked: boolean, disabled: boolean) =>
  css({
    position: 'relative',
    maxWidth: '100%',
    cursor: 'pointer',
    display: 'inline-flex',
    gap: '0px 4px',
    alignItems: 'center',

    ...(disabled
      ? {
          [`.${icon} rect`]: {
            fill: token('background.input.disabled'),
            stroke: token('background.input.disabled'),
          },
        }
      : checked
      ? {
          [`.${icon} rect`]: {
            fill: token('background.accent.blue.bold'),
            stroke: token('background.accent.blue.bold'),
          },

          [`:hover .${icon} rect`]: {
            fill: token('background.accent.blue.bold.hover'),
            stroke: token('background.accent.blue.bold.hover'),
          },
        }
      : {
          [`.${icon} rect`]: {
            fill: token('background.input'),
            stroke: token('border.input'),
          },

          [`:hover .${icon} rect`]: {
            fill: token('background.input.hover'),
          },

          [`:active .${icon} rect`]: {
            fill: token('background.input.focus'),
          },
        }),
  })

export const input = css({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0,
  opacity: 0,
  pointerEvents: 'none',
})

export const icon = css({
  display: 'block',
  overflow: 'hidden',

  rect: {
    fill: 'currentcolor',
    stroke: 'currentcolor',
    strokeWidth: 2,
    transition: 'stroke 150ms ease-in-out 0s, fill 150ms ease-in-out 0s',
  },
})

export const content = css({
  flex: 1,
})
