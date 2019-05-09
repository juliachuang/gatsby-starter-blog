import React from "react"
import {Link} from "gatsby";

function Menu() {

  return (
      <div> Menu bar:
  <Link to={"/blog/tech"}>
    Tech Blog
  </Link>
    |
  <Link to={"/blog/personal-finance"}>
      Personal Finance Blog
  </Link>
  </div>)
}

export default Menu