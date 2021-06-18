import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import { useMovies } from '../context/MovieContext'
import MoviePage from '../pages/MoviePage'
import { useHistory } from 'react-router-dom'

const FetchFilms = ({ films }) => {
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState([])
  const { setCurrentMovie } = useMovies()

  const history = useHistory()

  const goToMoviePage = (movie) => {
    setCurrentMovie(movie)
    history.push(`/movie/${movie.url.slice(27)}`)
  }

  useEffect(() => {
    async function fetchMovies() {
      try {
        const filmsResponses = await Promise.all(
          films.map(async (filmUrl) => {
            const secureUrl = filmUrl.replace(/http/g, 'https')
            const filmResponse = await fetch(secureUrl)
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
            <Card.Meta onClick={() => goToMoviePage(movie)}>
              {movie.title}
            </Card.Meta>
          </div>
        ))}
    </>
  )
}

export default FetchFilms
