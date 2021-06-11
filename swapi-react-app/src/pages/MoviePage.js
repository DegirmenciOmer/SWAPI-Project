import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Header, Loader } from 'semantic-ui-react'
import fetchData from '../util/fetchData'

const MoviePage = (props) => {
  const [movie, setMovie] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const FILMS_URL = 'https://swapi.dev/api/films/'

  useEffect(() => {
    fetchData(FILMS_URL, props.match.params.id, setLoading, setError).then(
      (data) => setMovie(data)
    )

    console.log(movie)
  }, [props.match.params])

  console.log(movie)

  return (
    <Grid columns={3} className='ui centered'>
      <Grid.Row>
        <Header as={Link} to='/'>
          Back
        </Header>
      </Grid.Row>
      <Grid.Row>{loading && <Loader active inline='centered' />}</Grid.Row>
      <Grid.Row>{error && <p>{error.message}</p>}</Grid.Row>
      {movie && (
        <>
          <Grid.Row>
            <Header>{movie.title}</Header>
          </Grid.Row>
          <Grid.Row>
            <span className='movie-item'>Director: </span> {movie.director}
          </Grid.Row>
          <Grid.Row>
            <span className='movie-item'>Producer: </span> {movie.producer}
          </Grid.Row>

          <Grid.Row>
            <span className='movie-item'>Release Date: </span>{' '}
            {movie.release_date}
          </Grid.Row>

          <Grid.Row>
            <span className='movie-item'> Opening Crawl: </span>
            <p>{movie.opening_crawl}</p>
          </Grid.Row>
        </>
      )}
      <Grid.Row></Grid.Row>
      <Grid.Row>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default MoviePage
