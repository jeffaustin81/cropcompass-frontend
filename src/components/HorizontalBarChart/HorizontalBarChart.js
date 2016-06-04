import { default as React, PropTypes } from 'react';
import Bar from './Bar'
export default class HorizontalBarChart extends React.Component{

  render(){
    let title = "Senators' favorite crops by grams consumed yearly"
    //let topCrops = this.props.data
    //let title = this,props.title
    let topCrops = [
      {
        cropName: "corn",
        cropNumber: 45000
      },
      {
        cropName: "carrots",
        cropNumber: 33000
      },
      {
        cropName: "rutabegas",
        cropNumber: 25000
      },
      {
        cropName: "potatoes",
        cropNumber: 20000
      },
      {
        cropName: "asparagus",
        cropNumber: 5000
      },
    ]
    console.log(topCrops)
    let data = {}
    let sumTotalofTopFive = topCrops.map(function(crop){
      return crop.cropNumber
    }).reduce(function(last, current){
      return last + current
    })
    let barNodes = topCrops.map(function(crop, index){
      return (<Bar cropName={crop.cropName} position={index} cropNumber={crop.cropNumber} sumTotalofTopFive={sumTotalofTopFive} />)
    })
    return(
      <div className="col-md-12">
      <h1>{title}</h1>
      {barNodes}
      </div>
    )
  }
}
