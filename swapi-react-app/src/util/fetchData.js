export default async function fetchData(url, query, setLoading, setError) {
  try {
    const fetchUrl = `${url}${query}`
    console.log(fetchUrl)
    const res = await fetch(fetchUrl)
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
