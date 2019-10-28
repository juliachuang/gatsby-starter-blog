import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Story</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>Julia and Jeff first met at University of Texas at Austin. They technically first met when Julia approached Jeff dressed in a suit while returning from an info session, something that they didn't realize was their first encounter until years later.</p>
          <p>They knew of each other and had plenty of mutual friends. Their encounters were always notable in some way:
            <ul>
              <li>Julia trying (and failing) to set up Jeff for an assassination during a round of ABSA Assassins</li>
              <li>Jeff scarring his left shin at a paper lantern festival Julia organized</li>
              <li>Julia trying (and failing) to set Jeff up with one of her friends</li>
            </ul>
          </p>
          <p>But it wasn't until after college that they really got to know each other, and it's been an adventure ever since.</p>
          {close}
        </article>

        <article
          id="events"
          className={`${this.props.article === 'events' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h3 className="major">Events</h3>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <h3>
            <u>Friday, November 15</u>
          </h3>
          <h4>"Ceremony"</h4>
          <p>
            The ceremony will be officiated by Melody and will take place at the Airbnb so please meet there promptly at 7:00pm. 
            We will then carpool to dinner. 
            <br/>
            <br/>
            Location: 7100 Garden Laurel Court, Plano, TX
            <br/>
            Time: 7:00pm
            <br/>
            Dress: Smart casual
          </p>

          <h4>Dinner</h4>
          <p>
            Location: Bulla Gastrobar in the Sevilla Room 
            <br/>
            Address: 6007 Legacy Drive Ste 180 Plano, TX 75024  
            <br />
            Time: Reservation starts at 7:30pm
            <br />
            Dress: Smart casual
          </p>

          <h4>Hangout</h4>
          <p>Head back to the AirBnb for movies and board games.</p>
          
          <h3>
            <u>Saturday, November 16</u>
          </h3>
          <p>
            11:00am - Whirlyball (3115 Parker Rd, Plano, TX 75023)
            <br/>
            Afternoon - King Spa (2154 Royal Ln, Dallas, TX 75229)
          </p>
          {close}
        </article>

        <article
          id="dallas"
          className={`${
            this.props.article === 'dallas' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Activities Around Dallas</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <p>
            <ul>
              <li>Botanical gardens</li>
              <li>The Shops at Legacy</li>
              <li>Arbor Hills Nature Preserve</li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="accommodations"
          className={`${
            this.props.article === 'accommodations' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Accommodations</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            We have rented out an Airbnb in Plano for out of town guests.{' '}
            <br />
            If you are in town, we will be hanging out at this location.
            <br />
            Expect a few nights of fun, laughter, and board games.
            <br />
            <br />
            Please mark whether or not you need a place to stay so we can send
            you the details in the RSVP.
          </p>
          {close}
        </article>

        <article
          id="rsvp"
          className={`${this.props.article === 'rsvp' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <form name="rsvp" method="post" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="bot-field" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field half first">
              <label htmlFor="guests">Total # of Guests (0-2)</label>
              <input type="text" name="guests" id="guests" />
            </div>
            <div className="field half">
              <label htmlFor="housing">Accommodations needed?</label>
              <input type="text" name="housing" id="housing" />
            </div>
            <div className="field">
              <label htmlFor="message">Notes</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {/* <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul> */}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
