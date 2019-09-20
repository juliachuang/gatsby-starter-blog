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
          <p>
            Julia and Jeff met at Univrsity of Texas at Austin..
          </p>
          <p>
            Need to fill this out more...
          </p>
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
          <h3><u>Friday, November 15</u></h3>
          <h4>Ceremony</h4>
            <i>Around 5pm</i><br/>
            <i>Officiated by: whichever sister I make do this</i>
            <br/>

          <h4>Dinner</h4>
            <i>TBD</i>
          <h3><u>Saturday, November 16</u></h3>
          <p>
            <i>Pay your own pay events</i>
            <ul>
              <li>Korean Spa & Board Games</li>
              <li>Bowling</li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="accomodations"
          className={`${this.props.article === 'accomodations' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Accomodations</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Renting a townhouse in Dallas for out of town guests. Expect a night of fun, laughter, and board games.
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
          <h2 className="major">RSVP</h2>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true">
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
              <label htmlFor="guests">Total # of Gueests</label>
              <input type="text" name="name" id="guests" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
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
