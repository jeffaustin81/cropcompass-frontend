import React from 'react';
import { Motion, spring } from 'react-motion'

class SideMenu extends React.Component{
    handleClick(payload){
      this.props.onSelect(payload.newCounty, payload.newCrop, payload.newYear)
    }

    handleYearChange = (e) => {
        e.preventDefault()
        this.props.changeYear(e.target.value)
        if(e.target.value > 1975 && e.target.value < 2013) {this.props.onSelect(this.props.selectedCounty, this.props.selectedCrop, e.target.value) }

    }

    render(){

      let {menuType, showMenus, selectedYear, countyList, cropList, putOneCropInState, putOneCountyInState, selectedCrop, selectedCounty} = this.props

      countyList = countyList.map( (d,i) => {
        return {name: d.county, fips: d.fips}
      })

      let cropNodes = cropList.map( (crop, index) => {

        return (<div style={{display: "inline-block", padding: "1%"}} key={Date.now + index} onClick={this.handleClick.bind(this, {newCounty: selectedCounty, newCrop: crop, newYear: selectedYear})}><strong>{crop}</strong></div>)
      })
      let countyNodes = countyList.map( (county, index) => {
        return (
          <div style={{display: "inline-block", padding: "1%"}} key={Date.now + index} onClick={this.handleClick.bind(this, {newCounty: county, newCrop: selectedCrop, newYear: selectedYear})}><strong>{county.name}</strong></div>

        )
      })

      return(
        <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
      {val => {
        let iconName = ''
        menuType === 'county' ? iconName = 'location-iconx2' : iconName = 'crop-hazelnut2x'
        let showCropStyles = {marginTop: `${val.x}%`, zIndex: "10", display: "block", opacity: ".8", minHeight: "50%", borderRadius: "10px", textAlign: "center", right:"2%", position: "fixed", background: "#5EAA00", color: "white"}
        let showCountyStyles = {marginTop: `${val.x}%`, zIndex: "10", display: "block", opacity: ".8",  minHeight: "50%", borderRadius: "10px", textAlign: "center",left:"2%", position: "fixed", background: "#5EAA00", color: "white"}
        return <div className={`col-sm-${showMenus.cropMenu && menuType === "crop" ? "8" : "3"} col-xs-5`} style={showMenus.cropMenu && menuType === "crop" ? showCropStyles : showCountyStyles}> <h3 style={{color:"white"}}><img src={`../../icons/crop-header-icons-off-white/${iconName}.png`}/> Choose a {menuType}</h3> {menuType === "county" ?  <div>
                    <form>
                    Year (between 1975 and 20112):
                    <input style={{color: "black"}} onChange={this.handleYearChange.bind(this)} type="number" name="quantity" min="1976" max="2012" />
                      </form>
                {countyNodes}
                </div> : cropNodes} </div>
      }}
      </Motion>
      )
    }
};

export default SideMenu;

//        return <div className="col-sm-3 col-xs-5" style={showMenu && menuType === "crop" ? showCropStyles : showMenu && menuType === "county" ? showCountyStyles : hideStyles}> <h3 style={{color:"white"}}>Choose a {menuType}</h3> {menuType === "county" ? countyNodes : cropNodes} </div>
