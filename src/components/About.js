import "./About.css";
import Pic from "../assets/pic.jpg";
function About() {
  return (
    <div className="About">
      <div className="PicContainer">
        <img src={Pic} alt="Duck Illustration" />
      </div>
      <div className="TextContainer">
        <div className="Text">
          <h1>ABOUT</h1>
          <p>This website is a tribute to teacher Emily F.</p>
          <p>It has been created by CFG Fullstack 1 Class of Spring 2022.</p>
          <p>
            Thank you Emily, for fostering an environment of supportive
            learning, for being an unshakeable source of encouragement, and for
            touching our lives in a positive way.
          </p>
          {/* <p>Thank you Emily, for all of the hard work you put into teaching us, for being an unshakeable source of encouragement, 
            for fostering an environment of supportive learning, and for touching our lives in a positive way.</p> */}
        </div>
      </div>
    </div>
  );
}

export default About;



// import './About.css';
// import Pic from '../assets/pic.jpg'
// function About() {
//   return (
//     <div className="About">
//       <div className='TwoColumns'>
//         <div className='PicContainer'>
//           <img src={Pic}/>
//         </div>
//         <div className='TextContainer'>
//           <h1>About:</h1>
//           <p>This website is a tribute to teacher Emily F.</p>
//           <p>It has been created by CFG Fullstack 1 Class of Spring 2022.</p>
//           <p>Thank you Emily, for fostering an environment of supportive learning, for being an unshakeable source of encouragement, 
//             and for touching our lives in a positive way.</p>
//           {/* <p>Thank you Emily, for all of the hard work you put into teaching us, for being an unshakeable source of encouragement, 
//             for fostering an environment of supportive learning, and for touching our lives in a positive way.</p> */}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About;