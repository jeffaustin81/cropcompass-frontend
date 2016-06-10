import React from 'react'

export default class CuteButton extends React.Component {

    render(){
    let cuteButtonStyle={borderRadius: "15px", background: "#BCCA30", border: "solid #523C03 2px", marginLeft:"5px", textAlign: "center", padding: "5px"}
    return(
      <div style={cuteButtonStyle}>
      {this.props.children}
    </div>
    )
  }
}
