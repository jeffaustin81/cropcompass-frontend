import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import SideMenu from '../SideMenu/SideMenu';

export const Header = () => {

    return (
      <div>
        <header>
          <div className="logo" style={{flex: 10}}>
            <img src="../../CC-logo.png" alt="CropCompass logo" width="200" height="100" />
          </div>
          <nav>
            <ul>

              <li><a href="#">
                <img src="../../icons/crop-header-icons-off-white/location-iconx2.png" alt="Location Icon" width="23" height="30"/>
                <p>Choose County</p>
              </a></li>

              <li><a href="#">
                <img src="../../icons/crop-header-icons-off-white/crop-hazelnut2x.png" alt="Crop Icon" width="35" height="35"/>
                <p>Choose Crop</p>
              </a></li>

            </ul>
          </nav>
        </header>
        <SideMenu />
      </div>
  )
}

export default Header
