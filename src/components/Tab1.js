// import withTabBackground from './withTabBackground.js';
import { ImMail } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import "./Tab3.css"
function Tab1() {
  return (
    <div  >
      <div class="responsive" >
        
        <div class="container">
          <h1 class="bigH1">Siyan Wen</h1>
          <img
          src="other/profile.jpg"
          alt="profile"
          style={{width:'150px'}}
          
        />
        <p>Experienced in Java backend development, Microservices and kafka. </p>
        </div>
        
        <div class="container" >
          
          <h2>Project Demo</h2>
          <h3>AI Canvas</h3>
          <video width="20%"   controls>
              <source src="./other/ai_canvas_sound_fast.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
          </video>
          <h3>Talk To PDF</h3>
          <video width="20%"   controls>
              <source src="./other/talk_to_pdf_sound.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
          </video>
          
          <div>
          <a href="mailto:swen42023@gmail.com" target="_blank" rel="noopener noreferrer">
            <ImMail style={{ 
            width: '32px', 
            height: '32px', 
            cursor: 'pointer',
            margin: '10px',
            color: '#a16b5e' }}/>
          
          </a>

          <a href="https://github.com/SiyanWen" target="_blank" rel="noopener noreferrer">
          <ImGithub style={{ 
            width: '32px', 
            height: '32px', 
            cursor: 'pointer',
            margin: '10px',
            color: '#a16b5e' }}/>
          
          </a>

          <a href="https://www.linkedin.com/in/siyan-wen-714a12337" target="_blank" rel="noopener noreferrer">
          <ImLinkedin style={{ 
            width: '32px', 
            height: '32px', 
            cursor: 'pointer',
            margin: '10px',
            color: '#a16b5e' }} />
          </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Tab1;