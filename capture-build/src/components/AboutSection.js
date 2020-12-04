import React from 'react'
import home1 from '../images/home1.png'
//Styling
import styled from 'styled-components'

const AboutSection = () => {
  return (
    <About>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>your <span>dreams</span> come</h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
          <p>Contact us for any ideas that you have in photography and videography. We have professionals with amazing skills.</p>
          <button>Contact Us</button>
        </div>
        <div className="image">
          <img src={home1} alt='guy with camera'/>
        </div>
      </div>
    </About>
  )
};

//Styled component
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`

export default AboutSection
