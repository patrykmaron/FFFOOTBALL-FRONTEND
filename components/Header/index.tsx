import * as React from 'react'
import { HeaderMain, MagicBox, HeaderNav, Flexbox, Account } from './styles'
import Logo from '../Logo'
import Navmenu from './Navmenu'

const Header: React.FC = () => (
  <>
    <HeaderMain>
      <MagicBox></MagicBox>
      <HeaderNav>
        <Flexbox>
          <Logo />
          <Navmenu
            links={['Scores', 'Schedule', 'Players', 'News', 'Teams', 'Stats']}
          />
          <Account>Login / Signup</Account>
        </Flexbox>
      </HeaderNav>
    </HeaderMain>
  </>
)

export default Header
