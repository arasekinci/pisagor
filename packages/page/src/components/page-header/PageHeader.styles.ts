import { css } from '@emotion/css'

export const root = css({
  margin: '24px 0',
})

export const header = css({
  display: 'flex',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
})

export const title = css({
  maxWidth: '100%',
  flex: 1,

  h1: {
    fontSize: '1.71429em',
    fontWeight: 500,
    outline: 2,
  },
})

export const actions = css({
  flex: '0 0 auto',
  maxWidth: '100%',
  paddingLeft: 32,
  whiteSpace: 'nowrap',
})

export const body = css({
  marginTop: 16,
})
