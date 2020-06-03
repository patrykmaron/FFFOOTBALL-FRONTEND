import styled from 'styled-components'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 50px;
`

export default function Home() {
  return <Title>My page</Title>
}
