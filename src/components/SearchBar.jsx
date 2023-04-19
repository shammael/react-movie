import { useRef } from 'react'
import { useEffect, useCallback } from 'react'
import { useState } from 'react'
import debounce from 'just-debounce-it'

function useSearchBar() {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const isTouched = useRef(false)

  useEffect(() => {
    if (!isTouched.current) {
      isTouched.current = query !== ''
    }

    if (query.length === 0 && isTouched.current) {
      return setError("Movie name can't be empty")
    }

    setError('')
  }, [query])

  return { query, error, setQuery }
}

const SearchBar = ({ queryUpdate, handleSubmit }) => {
  const { error, query, setQuery } = useSearchBar()
  const previousSearch = useRef('')

  const handleChange = (e) => {
    setQuery(e.target.value)
    queryUpdate(e.target.value)
    // handleSubmit(e.target.value)
    debouncedMovie(e.target.value)
  }

  const debouncedMovie = useCallback(
    debounce((query) => {
      handleSubmit(query)
    }, 500),
    []
  )

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (previousSearch.current === query) return
        previousSearch.current = query
        handleSubmit()
      }}
    >
      <div style={{ display: 'flex' }}>
        <input onChange={handleChange} placeholder="Avengers" type="text" />
        <button disabled={error || query.length === 0}>Submit</button>
      </div>
      {error && <span className="error">{error}</span>}
    </form>
  )
}

export default SearchBar
