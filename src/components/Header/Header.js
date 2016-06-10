import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import SideMenu from '../SideMenu/SideMenu';
import { connect } from 'react-redux'

class Header extends React.Component {

    triggerToggleCycleFlag = () => {
      this.props.toggleCycleFlag()
    }


    componentWillReceiveProps(nextProps){
      let cycleThrough = this.props.cycleThrough
      let cropImageName = this.props.cropImageName
      if(nextProps.cycleFlag === true){
         cycleThrough(cropImageName)
      }
    }

    render(){
    let { cropImageName, cycleThrough, toggleCycleFlag, cycleFlag } = this.props
    return (
      <div>
        <header>
          <div className="logo" style={{flex: 10}}>
            <img src="../../CC-logo.png" alt="CropCompass logo" width="200" height="100" />
          </div>
          <nav  style={{zIndex: "5"}}>
            <ul>

              <li><a href="#">
                <img src="../../icons/crop-header-icons-off-white/location-iconx2.png" alt="Location Icon" width="23" height="30"/>
                <p>Choose County</p>
              </a></li>

              <li><a href="#">
                <img onMouseEnter={this.triggerToggleCycleFlag.bind(this)} onMouseLeave={this.triggerToggleCycleFlag.bind(this)}
                src={`../../icons/crop-header-icons-off-white/crop-${cropImageName}2x.png`}
                alt="Crop Icon" width="35" height="35"/>
                <p>Choose Crop</p>
              </a></li>

            </ul>
          </nav>
        </header>
        <SideMenu />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	    return {
        cropImageName: state.cropImageName,
        cycleFlag: state.cycleFlag
        }
}

const CHANGE_CROP_IMAGE = "CHANGE_CROP_IMAGE"
const TOGGLE_CYCLE_FLAG = "TOGGLE_CYCLE_FLAG"

const cycleThrough = (cropImageName) => {
	return {type: CHANGE_CROP_IMAGE, payload: cropImageName }
}

const toggleCycleFlag = () => {
	return {type: "TOGGLE_CYCLE_FLAG" }
}

export default connect(mapStateToProps, {cycleThrough, toggleCycleFlag})(Header)
