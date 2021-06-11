import React, { useEffect, useState } from 'react'
import { Grid, Header, Loader } from 'semantic-ui-react'
import ActorCard from '../components/ActorCard'
import SearchForm from '../components/SearchForm'
import fetchData from '../util/fetchData'

const HomePage = () => {
  const [actors, setActors] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const ACTORS_URL = 'https://swapi.dev/api/people/?search='

  useEffect(() => {
    if (searchQuery !== '') {
      if (searchQuery.length > 2) {
        fetchData(ACTORS_URL, searchQuery, setLoading, setError).then((data) =>
          setActors(data.results)
        )
      }
    }
  }, [searchQuery])
  console.log(actors)

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
          return (
            <ActorCard
              key={actor.name}
              actor={actor}
              setLoading={setLoading}
              setActors={setActors}
              setError={setError}
            />
          )
        })}
    </Grid>
  )
}

export default HomePage
