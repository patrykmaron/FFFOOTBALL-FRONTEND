import styled from 'styled-components'
import Layout from '../components/Layout'

type Grid = {
  gridArea?: string
  Type?: string
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: 'Hero Hero league_table Widget_1' 'Hero Hero league_table widget_2' 'Hero Hero widget_3 widget_3';
  height: calc(100vh - ${({ theme }) => theme.sizing.headerHeight});
`
const GridItem = styled.div`
  grid-area: ${(props: Grid) => props.gridArea};
  position: relative;
  background: ${(props: Grid) =>
    props.gridArea === 'Hero'
      ? 'transparent url(/images/lewandowski_beta.png) no-repeat scroll 100% 100%'
      : ''};
  background-size: auto 95%;
`
const HeroTitle = styled.h1`
  font-size: 5rem;

  color: black;
  font-weight: bold;
  margin-top: ${(props: Grid) => (props.Type === 'subtitle' ? '' : '4rem')};
`

export default function Home() {
  return (
    <Layout title="FFFootball | Homepage">
      <Grid>
        <GridItem className="Hero" gridArea="Hero">
          <HeroTitle Type="title">#9 Robert</HeroTitle>
          <HeroTitle Type="subtitle">Lewandowski</HeroTitle>
        </GridItem>
        <GridItem className="league_table" gridArea="league_table">
          League Table
        </GridItem>
        <GridItem className="widget_3" gridArea="widget_3">
          Stats 3
        </GridItem>
        <GridItem className="Widget_1" gridArea="Widget_1">
          Stats 1
        </GridItem>
        <GridItem className="widget_2" gridArea="widget_2">
          Stats 2
        </GridItem>
      </Grid>
    </Layout>
  )
}
