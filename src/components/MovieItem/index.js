import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import './index.css'

import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

const Movieitem = props => {
  const {moviesList} = props
  const {thumbnailUrl, videoUrl} = moviesList
  return (
    <div>
      <Popup
        modal
        trigger={
          <div className="movie-item-card">
            <img
              className="movie-item-img"
              src={thumbnailUrl}
              alt="thumbnail"
            />
          </div>
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-card">
            <button
              type="button"
              testid="closeButton"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <ReactPlayer url={videoUrl} playing="true" controls="true" />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default Movieitem
