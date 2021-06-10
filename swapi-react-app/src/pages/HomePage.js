import React, { useEffect, useState } from 'react'
import { Grid, Header, Loader } from 'semantic-ui-react'
import ActorCard from '../components/ActorCard'
import SearchForm from '../components/SearchForm'

const HomePage = () => {
  const [actors, setActors] = useState([])
  const [searchQuery, setSearchQuery] = useState(undefined)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchActors() {
      try {
        const res = await fetch(
          `https://swapi.dev/api/people/?search=${searchQuery}`
        )
        setLoading(true)

        if (!res.ok) {
          setLoading(false)
          throw new Error('Something went wrong...')
        }

        const { results } = await res.json()

        setActors(results)
        setLoading(false)
      } catch (err) {
        console.log({ err })
        setLoading(false)
        setError(err)
      }
    }
    fetchActors()
  }, [searchQuery])
  console.log(actors)

  //{actor.films.map((film) => setMovie(film))}
  return (
    <Grid className='ui centered'>
      <Header>Star Wars</Header>
      <Grid.Row>
        <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </Grid.Row>

      <Grid.Row>{loading && <Loader active inline='centered' />}</Grid.Row>
      <Grid.Row>{error && <p>{error.message}</p>}</Grid.Row>

      {searchQuery && (
        <Grid.Row>
          <Header>Search results for '{searchQuery}'</Header>
        </Grid.Row>
      )}
      {actors &&
        actors.map((actor) => {
          return <ActorCard key={actor.name} actor={actor} />
        })}
    </Grid>
  )
}

export default HomePage
