// Write your code here.
import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  renderThumbnail = () => {
    const {imageDetails, selectedImage, onClickUpdateId} = this.props
    return imageDetails.map(eachImage => {
      const {thumbnailUrl, id, thumbnailAltText} = eachImage
      const onClickThumbnail = () => {
        onClickUpdateId(id)
      }
      const btnName = id === selectedImage ? 'selected-list-item' : 'list-item'
      return (
        <li key={id} className={btnName} onClick={onClickThumbnail}>
          <img
            src={thumbnailUrl}
            className="thumbnail-image"
            alt={thumbnailAltText}
          />
        </li>
      )
    })
  }

  render() {
    return (
      <div className="thumbnail-container">
        <h1 className="heading">Nature Photography</h1>
        <p className="description">Nature photography by Rahul</p>
        <ul className="thumbnail-list-container">{this.renderThumbnail()}</ul>
      </div>
    )
  }
}

export default ThumbnailItem
