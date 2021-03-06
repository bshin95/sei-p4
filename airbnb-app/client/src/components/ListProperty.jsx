import React, { Component } from "react"
import { Link } from "react-router-dom"
import TextContainer from "./TextContainer"

class ListProperty extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="host-top-container">
          <h1 className="start-hosting-header">
            Listing your housing and start earning today
          </h1>
          <div className="hosting-description">
            <p>
              Listing a home on Airbnb has never been easier or more
              customizable. You’re just a few steps away from earning money and
              reaching millions of global travelers.
            </p>
          </div>
          <Link to="/properties/host/start">
            <button className="get-started-button" type="button">
              Get Started
            </button>
          </Link>
        </div>
        <div className="img-div">
          <img
            className="home-interior-image"
            src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="entering-home"
          />
        </div>
        <div className="why-host-container">
          <TextContainer
            header="Why host on Airbnb?"
            body="No matter what kind of home or room you have to share, Airbnb
            makes it simple and secure to host travelers. You’re in full
            control of your availability, prices, house rules, and how you
            interact with guests."
          />
          <TextContainer
            header="We have your back"
            body="To keep you, your home, and your belongings safe, we cover every
            booking with $1M USD in property damage protection and another $1M
            USD in insurance against accidents."
          />
        </div>
        <div className="host-steps-container">
          <hr />
          <h1>Hosting in 3 steps</h1>
          <div className="steps-container">
            <TextContainer
              checkmark
              header="List your space for free"
              body="Share any space without sign-up charges, from a shared living
              room to a second home and everything in-between."
            />
            <TextContainer
              checkmark
              header="Decide how you want to host"
              body="Choose your own schedule, prices, and requirements for guests.
              We’re there to help along the way."
            />
            <TextContainer
              checkmark
              header="Welcome your first guest"
              body="Once your listing is live, qualified guests can reach out. You
              can message them with any questions before their stay."
              linkTo="/properties/host/start"
              linkText="Start hosting today."
            />
          </div>
        </div>
        <div>
          <hr />
          <h1>We've got you covered</h1>
          <div className="insurance-container">
            <div className="host-steps">
              <p>
                We know it’s a priority to trust the people staying in your
                home. Airbnb allows you to set strict requirements for who can
                book and to get to know guests before their stay.
                <br /> <br />
                If something does come up, though, we have your back. With our
                Host Guarantee covering property damage and our Host Protection
                Insurance for liability, you’re supported as a host throughout.
              </p>
            </div>
            <div className="host-steps">
              <p>
                <div className="step-check">
                  <span id="checkmark"></span>Ability to require government ID
                  before booking
                </div>
                <div className="step-check">
                  <span id="checkmark"></span>House Rules guests must agree to
                </div>
                <div className="step-check">
                  <span id="checkmark"></span>Chance to read reviews from past
                  trips
                </div>
                <div className="step-check">
                  <span id="checkmark"></span>Free $1M protection for property
                  damage
                </div>
                <div className="step-check">
                  <span id="checkmark"></span>
                  Free $1M liability insurance 24/7 global customer support
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListProperty
