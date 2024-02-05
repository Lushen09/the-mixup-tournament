import React from 'react'
import "../styles/intro-styles.css"
import Tekken8 from "../images/intro/tekken-8.jpg"
import SF6 from "../images/intro/SF6.jpg"
import MK1 from "../images/intro/MK1.png"
import DBZF from "../images/intro/DBZF.jpg"
import GGS from "../images/intro/GGS.png"

const Intro = () => {
  return (
    <div className="intro text-light" id="lineup">
      <div className="container text-center">
        {/* <div className="row"> */}
          <div className="column-text">
          <div className="heading1">
              <h1>Ready for the next battle?</h1>
            </div>
            <div className="heading2">
              <h1>Event Lineup</h1>
            </div>
            <div className="text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend nibh quissodales sollicitudin. In pretium ligula nunc, eu commodo enim ultrices nec. Suspendisse rutrum, justo fringilla commodo convallis, ante libero semper metus, sed viverra diam ante eu augue.</p>
            </div>
          </div>
          <div className="">
            <div className="carousel">
              {/* <img src={IntroImg} class="img-fluid" alt="tekken 8" /> */}
              <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={Tekken8} class="d-block w-100" alt="Tekken 8" />
                  </div>
                  <div class="carousel-item">
                    <img src={SF6} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={MK1} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={DBZF} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={GGS} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Intro