import useMovies from '../hooks/useMovies'
import Movie from './Movie'

function NoMoviesResult() {
  return <div>Movie(s) not found</div>
}

function ListOfMovies(movies) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}{' '}
    </ul>
  )
}

const Movies = ({ movies }) => {
  const hasMovies = movies.length
  return hasMovies ? ListOfMovies(movies) : NoMoviesResult
}

export default Movies
