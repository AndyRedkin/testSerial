import React from 'react'
import history from '../history'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import styled from '../utils/styled'

const Item = styled('li')`
  padding: 5px
`

const Span = styled('span')`
  margin-right: 3px
`

interface ListItemProps {
  data: any,
  setSerialId: (id: number) => void
}

const ListItem: React.SFC<ListItemProps> = ({ data, setSerialId }) => {
  const onCLick = (id: number) => {
    setSerialId(id)
    history.push(`/serial/${id}`)
  }
  return (
    <Item onClick={() => onCLick(data.show.id)}>
      <Card>
        <CardActionArea>
          {data.show.image && data.show.image.medium && <img src={data.show.image.medium}/>}
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {data.show.name}
            </Typography>
            <Typography variant="body2" color="textSecondary"
                        component="p">
              {data.show.genres.map((item: any) => {
                return <Span key={`${data.show.id}_${item}`}>{item}</Span>
              })}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Item>
  )
}

export default ListItem
