import React, { useEffect, useState } from 'react'
import { Grid, Image, Loader } from 'semantic-ui-react'
import ActorCard from '../components/ActorCard'
import SearchForm from '../components/SearchForm'
import fetchData from '../util/fetchData'
import logo from './star-wars-logo.svg'
import ErrorCard from '../components/ErrorCard'

const HomePage = () => {
  const [actors, setActors] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const ACTORS_URL = 'https://swapi.dev/api/people/?search='

  useEffect(() => {
    if (searchQuery.length > 2) {
      fetchData(ACTORS_URL, searchQuery, setLoading, setError).then((data) => {
        !data ? new Error('Oops...') : setActors(data.results)
      })
    } else {
      return
    }
  }, [searchQuery])

  return (
    <Grid className='ui centered'>
      <Grid.Row>
        <Image className='logo' src={logo} alt='logo' />
      </Grid.Row>
      <Grid.Row>
        <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </Grid.Row>

      {loading && (
        <Grid.Row>
          <Loader active inline='centered' />
        </Grid.Row>
      )}
      {error && <ErrorCard error={error} />}

      {actors &&
        actors.map((actor) => {
          return (
            <ActorCard
              key={actor.name}
              actor={actor}
              setLoading={setLoading}
              setActors={setActors}
              setError={setError}
              loading={loading}
            />
          )
        })}
    </Grid>
  )
}

export default HomePage
