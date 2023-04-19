import { useCallback, useState } from 'react'
import getMoviesService from '../services/getMovies'

const useMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getMovies = useCallback(async (value = '') => {
    try {
      if (value === '') return
      setLoading(true)
      const newMovies = await getMoviesService(value)
      setMovies(newMovies?.movies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { movies, getMovies, loading, error }
}
export default useMovies
