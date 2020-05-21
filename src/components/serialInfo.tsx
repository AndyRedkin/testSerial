import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import styled from '../utils/styled'

interface SerialInfoProps {
  serial: any
}

const Span = styled('span')`
  margin-right: 3px
`

const SerialInfo: React.SFC<SerialInfoProps> = ({ serial }) => {
  if (serial) {
    return (
      <Card>
        <CardActionArea>
          <img src={serial.show.image.original}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Name: {serial.show.name}
            </Typography>
            <Typography variant="body2" color="textSecondary"
                        component="p">
              Genres: {serial.show.genres.map((item: any) => {
              return <Span key={`${serial.show.id}_${item}`}>{item}</Span>
            })}
            </Typography>
            <Typography variant="body2" color="textSecondary"
                        component="p">
              Language: {serial.show.language}
            </Typography>
            <Typography variant="body2" color="textSecondary"
                        component="p">
              Official site: {serial.show.officialSite}
            </Typography>
            <Typography variant="body2" color="textSecondary"
                        component="p">
              Rating: {serial.show.rating.average}
            </Typography>
            <Typography variant="body2" color="textSecondary"
                        component="p">
              Status: {serial.show.status}
            </Typography>
            <Typography variant="body2" color="textSecondary"
                        component="p">
              Summery: {serial.show.summery}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
  return null
}

export default SerialInfo
