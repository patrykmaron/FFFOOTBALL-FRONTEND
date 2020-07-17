import * as React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

type Props = {
  title?: string
}

const SideMenu = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 50px;
  padding: 1rem;
`

const Main = styled.div`
  padding-left: 1rem;
  padding-right: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  min-height: 100vh;
  flex-direction: row;
`

const Top = styled.div`
  height: 100px;
`

const Bottom = styled.div`
  flex: 1;
`

const Layout: React.FC<Props> = ({ children, title = 'Default Title' }) => (
  <Wrapper>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <SideMenu></SideMenu>
    <Main>
      <Top>1</Top>
      <Bottom>{children}</Bottom>
    </Main>
  </Wrapper>
)

export default Layout
