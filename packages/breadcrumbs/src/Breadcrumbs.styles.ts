import styled from '@emotion/styled'

export const List = styled.ol({
  fontSize: 14,
  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  alignItems: 'center',
  margin: 0,
  padding: 0,
})

export const Seperator = styled.li({
  minWidth: 20,
  fontSize: '1em',
  textAlign: 'center',
  userSelect: 'none',
  margin: '0 2px',
  lineHeight: 1,

  span: {
    display: 'block',
  },
})
