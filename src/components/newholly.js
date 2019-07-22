import React from "react"
import { Link } from "gatsby"

function NewHollyInfo() {
  return (
    <div>
      <h2>Living in New Holly</h2>
      <h3>Utilities</h3>
      <p>
        Othello Station North is a HOA of condominiums part of New Holly and
        subject to New Holly Master's Association rules.
      </p>
      <p>The homes were put by Polygon construction</p>
      <ul>
        <li>
          Internet
          <p>Xfinity is the only real option for quick internet in the
          area. Century Link as of 2019 only provides up to 7mbps down</p>
          <ul>
            <li>Comcast Xfinity</li>
            <li>Century Link </li>
          </ul>
        </li>
        <li>
          Trash Pickup Schedule
          <a href={"https://www.seattlehousing.org/homeowners"}>
            https://www.seattlehousing.org/homeowners
          </a>
        </li>
        <li>Utilities
          <ul>
            <li>Water/Sewer is covered in the HOA payments. This is because homes are not individually metered. In fact, it's not just each building, but groups of buildings</li>
            <li></li>
            <li>Trash pickup is provided by Seattle Housing Authority (SHA) </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default NewHollyInfo
