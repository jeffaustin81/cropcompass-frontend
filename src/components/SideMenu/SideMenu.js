import React from 'react';
import Spring from 'react-motion'

class SideMenu extends React.Component{
    handleClick(county){
      console.log(this.props)
      this.props.onCountySelect({name:county})
    }

    render(){
      let { putOneItemInState, menuType, showMenu } = this.props
      let cropList = ["corn", "parsnips", "kale", "broccoli", "hay", "celery", "peas", "hazelnuts", "carrots", "potatoes"]
      let countyList = ["Baker",
      "Benton",
      "Clackamas",
      "Clatstop",
      "Colombia",
      "Coos",
      "Crook",
      "Curry",
      "Deschutes",
      "Douglas",
      "Gilliam",
      "Grant",
      "Harney",
      "Hood River",
      "Jackson",
      "Jefferson",
      "Josephine",
      "Klamath",
      "Lake",
      "Lane",
      "Lincoln",
      "Linn",
      "Malheur",
      "Marion",
      "Morrow",
      "Multnomah",
      "Polk",
      "Sherman",
      "Tilamook",
      "Umatilla",
      "Wallowa",
      "Wasco",
      "Washington",
      "Wheeler",
      "Yamhill",
    ]


      let cropNodes = cropList.map( (crop, index) => {
        return (<div style={{display: "inline-block", padding: "5px"}} key={Date.now + index} onClick={putOneItemInState.bind(this, crop)}><strong>{crop}</strong></div>)
      })
      let countyNodes = countyList.map( (county, index) => {
        return (
          <div style={{display: "inline-block", padding: "5px"}} key={Date.now + index} onClick={this.handleClick.bind(this, county)}><strong>{county}</strong></div>
        )
      })
      let showCropStyles = {marginTop: "10%", zIndex: "4", display: "block", opacity: ".8", minHeight: "50%", borderRadius: "10px", textAlign: "center", right:"30px", position: "fixed", background: "#5EAA00", color: "white"}
      let showCountyStyles = {marginTop: "10%", zIndex: "4", display: "block", opacity: ".8",  minHeight: "50%", borderRadius: "10px", textAlign: "center",left:"30px", position: "fixed", background: "#5EAA00", color: "white"}
      let hideStyles = {zIndex: "10", display: "none", borderRadius: "10px", textAlign: "center",  minHeight: "50%", left:"-20px", position: "fixed", background: "#5EAA00", color: "white"}

        return (
          <div className="col-sm-3 col-xs-10" style={showMenu && menuType === "crop" ? showCropStyles : showMenu && menuType === "county" ? showCountyStyles : hideStyles}>
          <h2 style={{color:"white"}}>Choose a {menuType}</h2>
          {menuType === "county" ? countyNodes : cropNodes}
          </div>
        )
    }
};

export default SideMenu;
