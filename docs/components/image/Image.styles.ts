import { css } from '@emotion/css'
import token from '@pisagor/core/tokens'

export const node = css({
  minWidth: '100%',
  minHeight: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  display: 'block',
  objectFit: 'contain',
  boxSizing: 'border-box',
  visibility: 'visible',
  transition: '150ms',
  opacity: 0,

  ':not([src])': {
    visibility: 'hidden',
  },
})

export const root = css({
  position: 'relative',
  maxWidth: '100%',
  width: 'initial',
  height: 'initial',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  padding: 0,
  border: 0,
  overflow: 'hidden',
  verticalAlign: 'top',
  boxSizing: 'border-box',

  '&.loading': {
    backgroundColor: token('background.status.neutral'),

    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '100%',
      transform: 'translateX(-100%)',
      background: `linear-gradient(90deg, transparent, ${token(
        'background.status.neutral.active'
      )}, transparent)`,
      animation: 'skeleton 1s infinite',
    },
  },

  '&.loaded img': {
    opacity: 1,
  },

  '&.broken-image': {
    backgroundColor: token('background.status.neutral'),
    backgroundPosition: 'center center',
    backgroundImage: "url('/images/broken-image.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: '25% 25%',
    filter: 'grayscale(1)',

    img: {
      opacity: 0,
    },
  },
})
