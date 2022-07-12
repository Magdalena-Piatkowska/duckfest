import './ImageCard.css';

function ImageCard({path, user, caption}) {
  return (
    <a href={path}>
      <div className="ImageCard">
        <img src={path} alt={user+` `+caption}/>
        <div>
          <p><strong>{user}</strong></p>
          <p>{caption}</p>
        </div>
      </div>
    </a>
  )
}

export default ImageCard
