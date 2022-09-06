import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  console.log(moviesList)
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  console.log(actionMovies)
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
  console.log(comedyMovies)
  return (
    <div className="bg-container">
      <img
        className="prime-img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="movies-card">
        <h1 className="movie-category-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />
        <h1 className="movie-category-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
