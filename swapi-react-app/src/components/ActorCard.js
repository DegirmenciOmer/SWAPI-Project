import React from 'react'
import { Card, Image, Loader } from 'semantic-ui-react'
import FetchFilms from './FetchFilms'

const ActorCard = ({ actor, loading }) => {
  console.log(actor.films)
  return (
    <Card className='actor-card '>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>{actor.name}</Card.Header>
        <Card.Meta>Born in {actor.birth_year} </Card.Meta>
        <Card.Meta>Height: {actor.height} </Card.Meta>
        <Card.Meta>{actor.gender} </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Card.Header>Movies</Card.Header>
        {!actor.films ? (
          <Loader active inline='centered' />
        ) : (
          <FetchFilms films={actor.films} />
        )}
        {loading && <Loader active inline='centered' />}
      </Card.Content>
    </Card>
  )
}

export default ActorCard
