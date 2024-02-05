import React, { useEffect, useState } from 'react'
import "../styles/gallery-styles.css"
import KOF from "../images/about/cb2022_KOF.jpg";
import Pools from "../images/about/cb2022_poolplay.jpg";
import Cuddle from "../images/about/cb2022_cuddle.jpg"


const About = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('row').offsetTop;

      if (scrollPosition > elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  

  return (

    <div>
      <div className="gallery">
        <div className="gallery-heading">
          <h1>The road to glory awaits</h1>
        </div>
        <div class="container">
          <div class="row" id="row">
            <div className= {`col-md-4 gallery-column-style ${isVisible ? 'column-animation1' : ''}`}>
              <img src={Cuddle} alt='Tournament' className="gallery-image" />
            </div>

            <div class={`col-md-4 gallery-column-style ${isVisible ? 'column-animation2' : ''}`}>
              <img src={KOF} alt='King of fighters' className="gallery-image" />
            </div>

            <div class={`col-md-4 gallery-column-style ${isVisible ? 'column-animation3' : ''}`}>
              <img src={Pools} alt='Pools' className="gallery-image" />
            </div>

          </div>

        </div>

      </div>
    </div>

  )
}

export default About