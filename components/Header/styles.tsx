import styled from 'styled-components'

export const HeaderMain = styled.header`
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
export const HeaderNav = styled.div`
  backround-color: blue;
  flex: 1 auto;
  box-shadow: 9px -9px 9px 9px rgba(41, 41, 41, 0.25);
  -webkit-box-shadow: 9px -9px 9px 9px rgba(41, 41, 41, 0.25);
  -moz-box-shadow: 9px -9px 9px 9px rgba(41, 41, 41, 0.25);
  @media (max-width: 768px) {
    flex: auto;
  }
`
