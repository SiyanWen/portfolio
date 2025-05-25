import withTabBackground from './withTabBackground.js';

function Tab1() {
  return (
    <div  >
      <div class="responsive" >
        <div class="responsive">
          <img
          src="other/graduate.jpg"
          alt="graduate"
          style={{ width: "200px", height: "279px"}}
        />
        </div>
        <div class="responsive" >
          <h1>Siyan Wen</h1>

          <h2>Education</h2>
          <h4>Stevens Institute of Technology (U.S.), Sep.2023 - May.2025</h4>
          <p>Master of Science in Computer Science</p>
          <h4>Central Academy of Fine Arts (China), Sep.2014 - Jun.2019</h4>
          <p>Bachelor's in architectural design</p>
          <a href="mailto:swen42023@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src='icons/envelope.svg' alt="Email" style={{ width: '32px', margin: '10px' }} />
          </a>

          <a href="https://github.com/SiyanWen" target="_blank" rel="noopener noreferrer">
          <img src='icons/github-sign.svg' alt="GitHub" style={{ width: '32px', margin: '10px' }} />
          </a>

          <a href="https://www.linkedin.com/in/siyan-wen-714a12337" target="_blank" rel="noopener noreferrer">
          <img src='icons/linkedin-sign.svg' alt="LinkedIn" style={{ width: '32px', margin: '10px' }} />
          </a>

        </div>
      </div>
    </div>
  );
}

export default withTabBackground(Tab1,  'background_2.jpg');