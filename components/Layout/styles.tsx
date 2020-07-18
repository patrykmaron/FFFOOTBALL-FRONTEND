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
