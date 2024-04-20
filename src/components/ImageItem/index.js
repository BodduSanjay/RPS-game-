import './index.css'

const ImageItem = ({image, gameStarted}) => {
  const {id, imageUrl, btnName} = image
  const imageClicked = () => {
    gameStarted(id, imageUrl)
  }
  return (
    <li className="list-item">
      <button
        type="button"
        data-testid={btnName}
        className="img-btn"
        onClick={imageClicked}
      >
        <img className="image-item" src={imageUrl} alt={id} />
      </button>
    </li>
  )
}
export default ImageItem
