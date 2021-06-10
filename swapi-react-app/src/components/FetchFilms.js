import React, { useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react'

const FetchFilms = ({ films }) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function fetchMovies() {
      try {
        const filmsResponses = await Promise.all(
          films.map(async (filmUrl) => {
            const filmResponse = await fetch(filmUrl)
            return filmResponse.json()
          })
        )

        console.log(filmsResponses)
        setMovies(filmsResponses)
        console.log(movies)
      } catch (err) {
        console.log({ err })
      }
    }
    fetchMovies()
  }, [])
  return (
    <>
      {movies &&
        movies.map((movie) => (
          <Card.Meta key={movie.episode_id}>{movie.title}</Card.Meta>
        ))}
    </>
  )
}

export default FetchFilms
