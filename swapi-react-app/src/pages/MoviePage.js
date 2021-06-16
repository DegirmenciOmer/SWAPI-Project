import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Grid, Loader } from 'semantic-ui-react'
import ErrorCard from '../components/ErrorCard'
import fetchData from '../util/fetchData'

const MoviePage = (props) => {
  const [movie, setMovie] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const FILMS_URL = 'https://swapi.dev/api/films/'

  useEffect(() => {
    fetchData(FILMS_URL, props.match.params.id, setLoading, setError).then(
      (data) => {
        console.log({ data })
        setMovie(data)
      }
    )
  }, [props.match.params.id])

  console.log({ movie })

  return (
    <>
      <Grid stackable columns={3} className='ui middle aligned centered '>
        <Grid.Row>{loading && <Loader active inline='centered' />}</Grid.Row>
      </Grid>
      {movie ? (
        <Card className='movie-page-container'>
          <Card.Content>
            <Card.Header>{movie.title}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <span className='movie-item '>Director: </span> {movie.director}
            </Card.Description>
            <Card.Description>
              <span className='movie-item'>Producer: </span> {movie.producer}
            </Card.Description>

            <Card.Description>
              <span className='movie-item'>Release Date: </span>{' '}
              {movie.release_date}
            </Card.Description>
          </Card.Content>

          <Card.Content>
            <span className='movie-item'> Opening Crawl: </span>
            <p>{movie.opening_crawl}</p>
          </Card.Content>
          <Card.Content textAlign='center' extra>
            <Button as={Link} to='/' basic color='blue'>
              Back
            </Button>
          </Card.Content>
        </Card>
      ) : (
        <ErrorCard error={error} />
      )}
    </>
  )
}

export default MoviePage
