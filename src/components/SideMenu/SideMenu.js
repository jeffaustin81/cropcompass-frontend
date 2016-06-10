import React from 'react';
import Spring from 'react-motion'

class SideMenu extends React.Component{

    render(){
      let { putOneCropInState } = this.props
      let cropList = ["corn", "parsnips", "kale", "broccoli", "hay", "celery", "peas", "hazelnuts", "carrots", "potatoes"]
      let cropNodes = cropList.map( (crop, index) => {
        return (<li key={Date.now + index} onClick={putOneCropInState.bind(this, crop)}><strong>{crop}</strong></li>)
      })
      let showMenuStyles = {zIndex: "10", display: "block", borderRadius: "10px", textAlign: "center", width: "20%", right:"-20px", position: "fixed", background: "#5EAA00", color: "white"}
      let hideMenuStyles = {display: "none", width: "25%", right:"-1px", position: "fixed", background: "#273D7A", color: "white"}
        return (
          <div style={this.props.showMenu ? showMenuStyles : hideMenuStyles}>
          <h2 style={{color:"white"}}>Choose a crop</h2>
          <ul style={{listStyle:"none"}}>
          {cropNodes}
          </ul>
          </div>
        )
    }
};

export default SideMenu;
