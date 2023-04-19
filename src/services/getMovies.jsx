const API_KEY = 'c29adc19'
export default async function getMoviesService(query) {
  if (query === '') return null
  try {
    const resp = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    )
    const movies = await resp.json()

    console.log({ movies })

    return {
      movies: movies.Search.map((movie) => ({
        id: movie.imdbID,
        year: movie.Year,
        type: movie.Type,
        poster: movie.Poster,
        title: movie.Title
      }))
    }
  } catch (error) {
    throw new Error('An error have been occured')
  }
}
