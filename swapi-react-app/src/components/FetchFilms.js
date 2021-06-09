import React, { useEffect } from 'react'

const FetchFilms = ({ films, setFilms }) => {
  useEffect(() => {
    async function fetchMovie() {
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
    fetchMovie()
  }, [searchQuery])
  return <div></div>
}

export default FetchFilms
