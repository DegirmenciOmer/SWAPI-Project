export default async function fetchData(url, query, setLoading, setError) {
  try {
    const res = await fetch(`${url}${query}`)
    setLoading(true)

    if (!res.ok) {
      setLoading(false)
      throw new Error('Something went wrong...')
    }

    const data = await res.json()

    setLoading(false)

    return data
  } catch (err) {
    console.log({ err })
    setLoading(false)
    setError(err)
  }
}
