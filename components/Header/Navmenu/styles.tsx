import styled from 'styled-components'

export const Nav = styled.nav``

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Li = styled.li`
  padding: 1rem;
`

const A = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  color: black;
`
export const ListItem: React.FC = ({ children }) => (
  <Li>
    <A href={String('/' + children).toLowerCase()}>{children}</A>
  </Li>
)
