import * as React from 'react'
import Head from 'next/head'
import { Header, MagicBox, HeaderMain, Wrapper, Main, Sidebar } from './styles'
import Logo from '../Logo'

type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = 'Default Title' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>
      <MagicBox></MagicBox>
      <HeaderMain>
        <Logo />
      </HeaderMain>
    </Header>
    <Wrapper>
      <Main>{children}</Main>
      <Sidebar></Sidebar>
    </Wrapper>
  </>
)

export default Layout
