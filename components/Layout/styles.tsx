import styled from 'styled-components'

export const Main = styled.section`
  padding-left: 1rem;
  padding-right: 2rem;
  flex: 1 auto;
  min-height: calc(100vh - ${({ theme }) => theme.sizing.headerHeight});
  @media (max-width: 768px) {
    min-height: calc(100vh - ${({ theme }) => theme.sizing.headerHeight} * 2);
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex: 1 auto;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const Sidebar = styled.div`
  order: -1;
  background-color: ${({ theme }) => theme.colors.primary};
  height: ${({ theme }) => theme.sizing.headerHeight};
  @media (min-width: 768px) {
    flex: 0 ${({ theme }) => theme.sizing.sideWidth};
    height: unset;
  }
`

export const Header = styled.header`
  background-color: white;
  height: ${({ theme }) => theme.sizing.headerHeight};
  width: 100%;
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  @media (max-width: 768px) {
    flex: auto;
  }
`
export const MagicBox = styled.div`
  width: ${({ theme }) => theme.sizing.sideWidth};
  background-color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 768px) {
    width: 0;
  }
`
export const HeaderMain = styled.div`
  backround-color: blue;
  flex: 1 auto;

  box-shadow: 9px -9px 9px 9px rgba(41, 41, 41, 0.25);
  -webkit-box-shadow: 9px -9px 9px 9px rgba(41, 41, 41, 0.25);
  -moz-box-shadow: 9px -9px 9px 9px rgba(41, 41, 41, 0.25);
  @media (max-width: 768px) {
    flex: auto;
  }
`
