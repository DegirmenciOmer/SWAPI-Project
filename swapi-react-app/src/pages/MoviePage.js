import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import ErrorCard from '../components/ErrorCard'
import { useMovies } from '../context/MovieContext'

const MoviePage = () => {
  const { currentMovie } = useMovies()
  console.log(currentMovie)

  return (
    <>
      {currentMovie ? (
        <Card className='movie-page-container'>
          <Card.Content>
            <Card.Header>{currentMovie.title}</Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <span className='movie-item '>Director: </span>{' '}
              {currentMovie.director}
            </Card.Description>
            <Card.Description>
              <span className='movie-item'>Producer: </span>{' '}
              {currentMovie.producer}
            </Card.Description>

            <Card.Description>
              <span className='movie-item'>Release Date: </span>{' '}
              {currentMovie.release_date}
            </Card.Description>
          </Card.Content>

          <Card.Content>
            <span className='movie-item'> Opening Crawl: </span>
            <p>{currentMovie.opening_crawl}</p>
          </Card.Content>
          <Card.Content textAlign='center' extra>
            <Button as={Link} to='/' basic color='blue'>
              Back
            </Button>
          </Card.Content>
        </Card>
      ) : (
        <ErrorCard />
      )}
    </>
  )
}

export default MoviePage
