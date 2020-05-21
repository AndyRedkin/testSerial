import * as React from 'react'
import Page from '../components/layout/Page'
import Container from '../components/layout/Container'
import styled from '../utils/styled'
import ListContainer from '../containers/ListContainer'
import ListComponent from '../components/list'

function SerialListPage() {
  return (
    <Page>
      <Container>
        <PageContent>
          <ListContainer>
            {({data, setSerialId}) => <ListComponent data={data} setSerialId={setSerialId}/>}
          </ListContainer>
        </PageContent>
      </Container>
    </Page>
  )
}

export default SerialListPage

const PageContent = styled('article')`
  max-width: ${props => props.theme.widths.md};
  margin: 0 auto;
  line-height: 1.6;

  a {
    color: ${props => props.theme.colors.brand};
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.5rem;
    font-family: ${props => props.theme.fonts.headings};
    line-height: 1.25;
  }
`
