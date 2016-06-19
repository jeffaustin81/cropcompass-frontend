import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import CuteButton from '../CuteButton/CuteButton'
import { connect } from 'react-redux'

class Header extends React.Component {

    triggerToggleCycleFlag = () => {
      this.props.toggleCycleFlag()
    }

    triggerCropMenuShow = () => {
      this.props.handleShowCropMenu()
    }

    triggerCountyMenuShow = () => {
      this.props.handleShowCountyMenu()
    }

    componentWillReceiveProps(nextProps){
      let cycleThrough = this.props.cycleThrough
      let cropImageName = this.props.cropImageName
      if(nextProps.cycleFlag === true){
         cycleThrough(cropImageName)
      }
    }

    render(){
    let { cropImageName, cycleThrough, toggleCycleFlag, cycleFlag, selectedCounty, handleOffMenu } = this.props
    const cropName = this.props.cropName || ""
    return (
      <div>
        <header style={{zIndex: "6", height: "17%", minHeight:"120px", position: "fixed"}} >
          <div className="logo" style={{flex: 10}}>
            <Link to='splash'><img src="../../CC-logo.png" alt="CropCompass logo" width="200" height="100" /></Link>


          </div>



          <nav>
            <ul>

                                  <CuteButton>
                                      <h4>  Current crop: </h4> {cropName}
                                  </CuteButton>
                                  <CuteButton>
                                    <h4>  Current county: </h4>{selectedCounty}
                                  </CuteButton>
              <li onClick={this.triggerCountyMenuShow.bind(this)}><a>
                <img src="../../icons/crop-header-icons-off-white/location-iconx2.png" alt="Location Icon" width="23" height="30"/>
                <p>Choose County</p>
              </a></li>

              <li onClick={this.triggerCropMenuShow.bind(this)}><a>
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
