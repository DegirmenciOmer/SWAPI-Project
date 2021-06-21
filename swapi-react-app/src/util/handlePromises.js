export default async function handlePromises(urls, setError) {
  try {
    const responses = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url)
        return response.json()
      })
    )

    return responses
  } catch (err) {
    setError(true)
    console.log({ err })
  }
}
