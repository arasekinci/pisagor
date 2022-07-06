import { css } from '@emotion/css'

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
            fill: 'var(--checkbox-background-disabled)',
            stroke: 'var(--checkbox-border-disabled)',
          },
        }
      : checked
      ? {
          [`.${icon} rect`]: {
            fill: 'var(--checkbox-background-checked)',
            stroke: 'var(--checkbox-border-checked)',
          },

          [`:hover .${icon} rect`]: {
            fill: 'var(--checkbox-background-checked-hover)',
            stroke: 'var(--checkbox-border-checked-hover)',
          },
        }
      : {
          [`.${icon} rect`]: {
            fill: 'var(--checkbox-background)',
            stroke: 'var(--checkbox-border)',
          },

          [`:hover .${icon} rect`]: {
            fill: 'var(--checkbox-background-hover)',
            stroke: 'var(--checkbox-border-hover)',
          },

          [`:active .${icon} rect`]: {
            fill: 'var(--checkbox-background-active)',
            stroke: 'var(--checkbox-border-active)',
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
    strokeWidth: 2,
    transition: 'stroke 150ms ease-in-out 0s, fill 150ms ease-in-out 0s',
  },
})

export const content = css({
  flex: 1,
})
