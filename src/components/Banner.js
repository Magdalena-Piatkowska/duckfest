import './Banner.css';
// import Logo from '../assets/logo.svg'
import Logo from '../assets/logo.png'

function Banner() {
  return (
    <div className="Banner">
      <div className='LogoContainer'>
        <img src={Logo}/>
        {/* <object type="image/svg+xml" data={Logo} className="Logo">
          Duckfest
        </object> */}
      </div>
      {/* <h1>Duckfest</h1> */}
    </div>
  )
}

export default Banner;