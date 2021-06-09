import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ActorCard = ({ actor }) => {
  return (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>{actor.name}</Card.Header>
        <Card.Meta>Born in {actor.birth_year} </Card.Meta>
        <Card.Meta>Height: {actor.height} </Card.Meta>
        <Card.Meta>{actor.gender} </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Card.Header>Movies</Card.Header>
        {actor.films.map((movie) => {
          return <p key={movie}>{movie}</p>
        })}
      </Card.Content>
    </Card>
  )
}

export default ActorCard
