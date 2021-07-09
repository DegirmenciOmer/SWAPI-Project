import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { Card, Loader } from 'semantic-ui-react'
import { useSwapi } from '../context/Contexts'

const FetchFilms = ({ films }) => {
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState([])
  const { setCurrentMovie } = useSwapi()
  const [loading, setLoading] = useState(false)

  //to get the :id from the url
  const movieId = (movie) => movie.url.slice(28)

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true)
        const filmsResponses = await Promise.all(
          films.map(async (filmUrl) => {
            const filmResponse = await fetch(filmUrl)
            return filmResponse.json()
          })
        )

        setMovies(filmsResponses)
        setLoading(false)
      } catch (err) {
        setError(true)
        setLoading(false)
        console.log({ err })
      }
    }
    fetchMovies()
  }, [films])
  return (
    <>
      {error && <p>Something went wrong...</p>}
      {loading && <Loader active inline='centered' />}

      {movies &&
        movies.map((movie) => (
          <div key={movie.episode_id}>
            <Card.Meta
              as={Link}
              to={`/movies/${movieId(movie)}`}
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
