import React from 'react';
import { Motion, spring } from 'react-motion'

class SideMenu extends React.Component{
    handleClick(county){
      console.log(this.props)
      this.props.onCountySelect({name:county.name, fips: county.fips})
    }


    render(){
      let { putOneItemInState, menuType, showMenus, countyList, cropList } = this.props

      let cropNodes = cropList.map( (crop, index) => {
        return (<div style={{display: "inline-block", padding: "1%", cursor: "pointer"}} key={Date.now + index} onClick={putOneItemInState.bind(this, crop)}><strong>{crop}</strong></div>)
      })
      let countyNodes = countyList.map( (county, index) => {
        return (
          <div style={{display: "inline-block", padding: "1%", cursor: "pointer"}} key={Date.now + index} onClick={this.handleClick.bind(this, county)}><strong>{county.name}</strong></div>
        )
      })
      return(
        <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
      {val => {
        let iconName = ''
        menuType === 'county' ? iconName = 'location-iconx2' : iconName = 'crop-hazelnut2x'
        let showCropStyles = {marginTop: `${val.x}%`, zIndex: "4", display: "block", opacity: ".8", minHeight: "50%", borderRadius: "10px", textAlign: "center", right:"2%", position: "fixed", background: "#5EAA00", color: "white"}
        let showCountyStyles = {marginTop: `${val.x}%`, zIndex: "4", display: "block", opacity: ".8",  minHeight: "50%", borderRadius: "10px", textAlign: "center",left:"2%", position: "fixed", background: "#5EAA00", color: "white"}
        return <div className={`col-sm-${showMenus.cropMenu && menuType === "crop" ? "8" : "3"} col-xs-5`} style={showMenus.cropMenu && menuType === "crop" ? showCropStyles : showCountyStyles}> <h3 style={{color:"white"}}><img src={`../../icons/crop-header-icons-off-white/${iconName}.png`}/> Choose a {menuType}</h3> {menuType === "county" ? countyNodes : cropNodes} </div>
      }}
      </Motion>
      )
    }
};

export default SideMenu;

//        return <div className="col-sm-3 col-xs-5" style={showMenu && menuType === "crop" ? showCropStyles : showMenu && menuType === "county" ? showCountyStyles : hideStyles}> <h3 style={{color:"white"}}>Choose a {menuType}</h3> {menuType === "county" ? countyNodes : cropNodes} </div>
