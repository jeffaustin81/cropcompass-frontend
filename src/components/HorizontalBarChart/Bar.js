import { default as React, PropTypes } from 'react';

export default class Bar extends React.Component{
  render(){
    let { cropName, cropNumber, sumTotalofTopFive, position } = this.props
    let percentage = ((cropNumber / sumTotalofTopFive) * 100)
    let barStyle = {color: "black", background: "", borderRadius: "10px", height: "3em", width: `${percentage}%`}
    switch (parseInt(position)) {
    case 0:
        barStyle.background = "#5c7b1e";
        break;
    case 1:
        barStyle.background = "#7ba428";
        break;
    case 2:
        barStyle.background = "#9acd32";
        break;
    case 3:
        barStyle.background = "#aed75a";
        break;
    case 4:
        barStyle.background = "#c2e184";
        break;
}

    console.log(barStyle)
    return(
      <div>
        <div className="row">
            <div className="col-xs-4 text-right">
              <h2>{cropName}</h2>
            </div>
            <div className="col-xs-8">
            <div style={barStyle}>  </div>
            <h4>{cropNumber}</h4>
            </div>
        </div>

      </div>
    )
  }
}
