import * as React from 'react'
import { HeaderMain, MagicBox, HeaderNav } from './styles'
import Logo from '../Logo'

const Header: React.FC = () => (
  <>
    <HeaderMain>
      <MagicBox></MagicBox>
      <HeaderNav>
        <Logo />
      </HeaderNav>
    </HeaderMain>
  </>
)

export default Header
