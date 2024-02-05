import React from 'react'
import "../styles/event-styles.css"
import LocationPin from "../images/event/location-pin.png"
import Hotel from "../images/event/hotel.png"
import Airplane from "../images/event/airplane.png"


const Event = () => {
  return (
    <div className="event">
      <div className="text-light">
        <h2 className="event-heading">Event Details</h2>
      </div>
      <div className="event-content text-light">
        <div class="container text-center">
          <div class="row">
            <div class="column-style col-lg-4">
              <img
                src={LocationPin}
                alt="GPS Pin"
                className="event-image"
              />
              <div className="column-content">
                <h3 className="event-subHeading">Location</h3>
                <p>Manchester, United Kingdom</p>
                <a className="event-link" href="https://www.ao-arena.com/">Manchester AO Arena</a>
                <p>The AO Arena Manchester, managed and operated by ASM Global, is one of the busiest venues in the world and the largest indoor arena in Europe.</p>
              </div>
            </div>
            <div class="column-style col-lg-4">
              <img
                src={Hotel}
                alt="GPS Pin"
                className="event-image"
              />
              <div className="column-content">
                <h3 className="event-subHeading">Accomodation</h3>
                <p>Explore many world class, affordable hotel options based in the heart of Manchester City Centre. We have partnered with a few chains to offer exclusive deals to the mixup attendees</p>
                <a className="event-link" href="https://www.expedia.co.uk/Manchester-City-Centre-Manchester-Hotels.0-n6192111-0.Travel-Guide-Filter-Hotels">Explore them here</a>
              </div>
            </div>
            <div class="column-style col-lg-4">
              <img
                src={Airplane}
                alt="GPS Pin"
                className="event-image"
              />
              <div className="column-content">
                <h3 className="event-subHeading">Transportation</h3>
                <a className="event-link" href="https://www.manchesterairport.co.uk/"> Manchester Airport (MAN)</a>
                <p>Travel to and from the airport and around Manchester via tram, bus, taxi, uber. Transportation is both convenient and safe. Find out more <a className="event-link" href="https://tfgm.com/public-transport">here</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event