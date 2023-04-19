const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.poster} />
      <h3>{movie.title}</h3>
      <span>{movie.year}</span>
    </div>
  )
}

export default Movie
