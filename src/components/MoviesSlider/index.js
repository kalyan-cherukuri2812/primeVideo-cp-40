import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Movieitem from '../MovieItem'

import './index.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesList.map(each => (
          <Movieitem key={each.id} moviesList={each} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
