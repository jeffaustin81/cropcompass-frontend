import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'
import SideMenu from '../SideMenu/SideMenu';
import { connect } from 'react-redux'

class Header extends React.Component {
/*      componentWillReceiveProps(nextProps){
          if (nextProps.cycleFlag === true){
            nextProps.cycleThrough(nextProps.cropImageName)
          }
        }
*/
    render(){
    let { cropImageName, cycleThrough, toggleCycleFlag, cycleFlag } = this.props
    //let cycleThroughFlagToggle = () => {
    //  cycling = !cycling
    //  while (cycling === true){
      //setInterval(

          //, 500)
    //  }


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
                <img onClick={cycleThrough.bind(this, cropImageName)}
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

const cycleThrough = (cropImageName) => {
	return {type: "CHANGE_CROP_IMAGE", payload: cropImageName }
}

const toggleCycleFlag = () => {
	return {type: "TOGGLE_CYCLE_FLAG" }
}


const mapDispatchToProps = (dispatch) => {
  return {cycleThrough: (cropImageName) => dispatch(cycleThrough(cropImageName)),
    toggleCycleFlag: () => dispatch(toggleCycleFlag())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
