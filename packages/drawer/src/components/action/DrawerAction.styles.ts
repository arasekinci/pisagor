import { css } from '@emotion/css'

export const root = css({
  display: 'flex',
  width: 40,
  height: 40,
  marginBottom: 4,
  padding: 0,
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  borderRadius: '50%',
  color: 'inherit',
  cursor: 'pointer',
  fontSize: 'inherit',
  backgroundColor: 'transparent',
  lineHeight: 1,

  ':hover': {
    backgroundColor: 'rgba(9,30,66,0.08)',
  },

  ':active': {
    backgroundColor: '#DEEBFF',
    outline: 0,
  },
})
