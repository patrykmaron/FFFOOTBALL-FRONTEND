import styled from 'styled-components'
import Layout from '../components/Layout'

type Grid = {
  gridArea?: string
  Type?: string
}

type Card = {
  height: string
  width: string
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
  font-family: 'Fredoka One', cursive;
  font-size: 5rem;
  line-height: 5rem;
  color: ${(props: Grid) => (props.Type === 'subtitle' ? '#F71735' : 'black')};

  margin-top: ${(props: Grid) => (props.Type === 'subtitle' ? '' : '8rem')};
  margin-bottom: ${(props: Grid) => (props.Type === 'title' ? '' : '6rem')};
`
const Card = styled.div`
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: ${(props: Card) => props.height};
  width: ${(props: Card) => props.width};
  margin: 1rem;
  position: relative;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

export default function Home() {
  return (
    <Layout title="FFFootball | Homepage">
      <Grid>
        <GridItem className="Hero" gridArea="Hero">
          <svg
            height="800px"
            width="800px"
            style={{ position: 'absolute', zIndex: -1, left: '-60' }}
          >
            <text
              x="-50px"
              y="360px"
              fill="#FCFFFB"
              fontSize="30rem"
              stroke="#edf1eb"
              strokeWidth="8px"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeOpacity="0.6"
              fontFamily="'Fredoka One', cursive"
            >
              #9
            </text>
          </svg>
          <HeroTitle Type="title">Robert</HeroTitle>
          <HeroTitle Type="subtitle">Lewandowski</HeroTitle>
          <Card height="150px" width="150px"></Card>

          <Card height="150px" width="150px"></Card>
          <br />
          <Card height="150px" width="332px"></Card>
        </GridItem>
        <GridItem className="league_table" gridArea="league_table">
          <Card height="90%" width="90%">
            League Table
          </Card>
        </GridItem>
        <GridItem className="widget_3" gridArea="widget_3">
          <Card height="90%" width="90%">
            Widget 3
          </Card>
        </GridItem>
        <GridItem className="Widget_1" gridArea="Widget_1">
          <Card height="90%" width="90%">
            Widget 1
          </Card>
        </GridItem>
        <GridItem className="widget_2" gridArea="widget_2">
          <Card height="90%" width="90%">
            Widget 2
          </Card>
        </GridItem>
      </Grid>
    </Layout>
  )
}
