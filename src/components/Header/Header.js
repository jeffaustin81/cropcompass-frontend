import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <header>
      <div className="logo">
        <img src="../../CC-logo.png" alt="CropCompass logo" width="200" height="100" />
      </div>
      <nav>
        <ul>

        <li><a href="#">
          <img src="../../icons/crop-header-icons-off-white/location-iconx2.png" alt="Location Icon" width="23" height="30"/>
            <p>Choose County</p>
        </a></li>

        <li><a href="#">
          <img src="../../icons/crop-header-icons-off-white/crop-apple2x.png" alt="Crop Icon" width="35" height="35"/>
            <p>Choose Crop</p>
        </a></li>

        </ul>
      </nav>
    </header>
  </div>
)

export default Header
