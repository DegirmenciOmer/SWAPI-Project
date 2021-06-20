import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import { useMovies } from '../context/MovieContext'

const FetchFilms = ({ films }) => {
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState([])
  const { setCurrentMovie } = useMovies()

  //to get the :id from the url
  const movieId = (movie) => movie.url.slice(28)

  useEffect(() => {
    async function fetchMovies() {
      try {
        const filmsResponses = await Promise.all(
          films.map(async (filmUrl) => {
            const filmResponse = await fetch(filmUrl)
            return filmResponse.json()
          })
        )

        setMovies(filmsResponses)
      } catch (err) {
        setError(true)
        console.log({ err })
      }
    }
    fetchMovies()
  }, [films])
  return (
    <>
      {error && <p>Something went wrong...</p>}
      {movies &&
        movies.map((movie) => (
          <div key={movie.episode_id}>
            <Card.Meta
              as={Link}
              to={`/movie/${movieId(movie)}`}
              onClick={() => setCurrentMovie(movie)}
            >
              {movie.title}
            </Card.Meta>
          </div>
        ))}
    </>
  )
}

export default FetchFilms
