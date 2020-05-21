import React from 'react'
import styled from '../utils/styled'
import ListItem from './listItem'

const ListContainer = styled('ul')`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none
`

interface ListComponentProps {
  data: Array<Object>
  setSerialId: (id: number) => void
}

const ListComponent: React.SFC<ListComponentProps> = ({ data, setSerialId }) => {

  return (
    <ListContainer>
      {data.map((item: any) => {
        return <ListItem key={item.show.id} data={item} setSerialId={setSerialId} />
      })}
    </ListContainer>
  )
}

export default ListComponent
