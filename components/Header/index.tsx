import * as React from 'react'
import {
  HeaderMain,
  MagicBox,
  HeaderNav,
  Flexbox,
  Nav,
  Account,
} from './styles'
import Logo from '../Logo'

const Header: React.FC = () => (
  <>
    <HeaderMain>
      <MagicBox></MagicBox>
      <HeaderNav>
        <Flexbox>
          <Logo />
          <Nav>Home Players About Contact</Nav>
          <Account>Login / Signup</Account>
        </Flexbox>
      </HeaderNav>
    </HeaderMain>
  </>
)

export default Header
