import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-heart"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Julia Chuang & Jeffrey Li</h1>
        <p>Plano, Texas ⚫ Friday, November 15, 2019</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Our Story
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('events')
            }}
          >
            Events
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('accommodations')
            }}
          >
            Accommodations
          </a>
        </li>
        {/* <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('dallas')
            }}
          >
            Around Dallas
          </a>
        </li> */}
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('rsvp')
            }}
          >
            RSVP
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
