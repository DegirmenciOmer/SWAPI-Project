import React, { useEffect, useState } from 'react'
import { Loader } from 'semantic-ui-react'

const HomePage = () => {
  const [films, setFilms] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchFilms() {
      try {
        setLoading(true)
        const res = await fetch('https://swapi.dev/api/films/')
        console.log(res)

        if (!res.ok) {
          console.log('hello')
          setLoading(false)
          throw new Error('Something went wrong...')
        }

        const { results } = await res.json()

        setFilms(results)
        setLoading(false)
      } catch (err) {
        console.log({ err })
        setLoading(false)
        setError(err)
      }
    }
    fetchFilms()
  }, [])
  console.log(films)
  return (
    <div>
      <p>https://youtu.be/EC5ZvP87P2k?t=427</p>
      {loading && <Loader active inline='centered' />}
      {error && <p>{error.message}</p>}
      {films ? <p>Films</p> : error ? <p>{error}</p> : <p>Loading...</p>}
    </div>
  )
}

export default HomePage
