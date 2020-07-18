import * as React from 'react'
import { Nav, List, ListItem } from './styles'

type Props = {
  links: string[]
}

const Navmenu: React.FC<Props> = ({
  links = ['default', 'list', 'for', 'test'],
}) => (
  <Nav>
    <List>
      {links.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
  </Nav>
)

export default Navmenu
