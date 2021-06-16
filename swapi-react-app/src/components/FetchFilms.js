import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

const FetchFilms = ({ films }) => {
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function fetchMovies() {
      try {
        const filmsResponses = await Promise.all(
          films.map(async (filmUrl) => {
            const secureUrl = filmUrl.replace(/http/g, 'https')
            console.log(secureUrl)
            const filmResponse = await fetch(secureUrl)
            console.log(secureUrl)
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
            <Card.Meta as={Link} to={`/movie/${movie.url.slice(27)}`}>
              {movie.title}
            </Card.Meta>
          </div>
        ))}
    </>
  )
}

export default FetchFilms
