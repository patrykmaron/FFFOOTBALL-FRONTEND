import * as React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

type Props = {
  title?: string
}

const Main = styled.section`
  padding-left: 1rem;
  padding-right: 2rem;
  flex: 1 auto;
  min-height: calc(100vh - ${({ theme }) => theme.sizing.headerHeight});
  @media (max-width: 768px) {
    min-height: calc(100vh - ${({ theme }) => theme.sizing.headerHeight} * 2);
  }
`

const Wrapper = styled.div`
  display: flex;
  flex: 1 auto;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Sidebar = styled.div`
  order: -1;
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${({ theme }) => theme.sizing.headerHeight};
  @media (min-width: 768px) {
    flex: 0 ${({ theme }) => theme.sizing.sideWidth};
    height: unset;
  }
`

const Header = styled.header`
  background-color: black;
  height: ${({ theme }) => theme.sizing.headerHeight};
  width: 100%;
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  @media (max-width: 768px) {
    flex: auto;
  }
`
const MagicBox = styled.div`
  width: ${({ theme }) => theme.sizing.sideWidth};
  background-color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 768px) {
    width: 0;
  }
`
const HeaderMain = styled.div`
  backround-color: blue;
  flex: 1 auto;
  @media (max-width: 768px) {
    flex: auto;
  }
`

const Layout: React.FC<Props> = ({ children, title = 'Default Title' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header>
      <MagicBox></MagicBox>
      <HeaderMain></HeaderMain>
    </Header>
    <Wrapper>
      <Main>{children}</Main>
      <Sidebar></Sidebar>
    </Wrapper>
  </>
)

export default Layout
