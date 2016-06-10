import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import { connect } from 'react-redux'

class Header extends React.Component {

    triggerToggleCycleFlag = () => {
      this.props.toggleCycleFlag()
    }

    triggerMenuShow = () => {
      this.props.handleShowMenu()
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
        <header >
          <div className="logo" style={{flex: 10}}>
            <img src="../../CC-logo.png" alt="CropCompass logo" width="200" height="100" />


          </div>

          <h2><a href={`wikipedia.com/${this.props.cropName ? this.props.cropName : ""}`}>
              Current crop: {this.props.cropName ? this.props.cropName : ""}
          </a>
          <br/>
          <a href={`wikipedia.com/${this.props.cropName ? this.props.cropName : ""}`}>
              Current county: {this.props.cropName ? this.props.selectedCounty : ""}
              </a></h2>
          <nav style={{zIndex: "5"}}>

            <ul>

              <li><a href="#">
                <img src="../../icons/crop-header-icons-off-white/location-iconx2.png" alt="Location Icon" width="23" height="30"/>
                <p>Choose County</p>
              </a></li>

              <li onClick={this.triggerMenuShow.bind(this)}><a href="#">
                <img onMouseEnter={this.triggerToggleCycleFlag.bind(this)} onMouseLeave={this.triggerToggleCycleFlag.bind(this)}
                src={`../../icons/crop-header-icons-off-white/crop-${cropImageName}2x.png`}
                alt="Crop Icon" width="35" height="35"/>
                <p>Choose Crop</p>
              </a></li>

            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	    return {
        cropImageName: state.cropImageName,
        cycleFlag: state.cycleFlag,
        cropName: state.cropName
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
