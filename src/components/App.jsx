import SearchBar from './SearchBar'
import useMovies from '../hooks/useMovies'
import Movies from './Movies'
import '../styles/app.css'
import { useState } from 'react'

const App = () => {
  const [search, setSearch] = useState('')
  const { movies, getMovies, loading } = useMovies(search)

  return (
    <div className="">
      <header className="searchBar">
        <SearchBar queryUpdate={(e) => setSearch(e)} handleSubmit={getMovies} />
      </header>
      <main className="w-full">
        {loading ? <div>Loading</div> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
