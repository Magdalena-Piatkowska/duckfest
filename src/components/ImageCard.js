import './ImageCard.css';

function ImageCard({path, user, caption}) {
  return (
    <a href={path}>
      <div className="ImageCard">
        <font>
          <img src={path} alt={user+` `+caption}/>
        </font>
        <div>
          <p className='UserName'>{user}</p>
          <p className='Caption'><strong>{caption}</strong></p>
        </div>
      </div>
    </a>
  )
}

export default ImageCard
