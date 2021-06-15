import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

const FetchFilms = ({ films }) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    console.log(films)
    async function fetchMovies() {
      try {
        const filmsResponses = await Promise.all(
          films.map(async (filmUrl) => {
            const filmResponse = await fetch(filmUrl)
            return filmResponse.json()
          })
        )

        console.log(filmsResponses, 'filmsResponses')
        setMovies(filmsResponses)
        console.log(movies, 'movies')
      } catch (err) {
        console.log({ err })
      }
    }
    fetchMovies()
  }, [films])
  return (
    <>
      {movies &&
        movies.map((movie) => (
          <div key={movie.episode_id}>
            <Card.Meta as={Link} to={`/movie/${movie.episode_id}`}>
              {movie.title}
            </Card.Meta>
          </div>
        ))}
    </>
  )
}

export default FetchFilms
