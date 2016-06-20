import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import CuteButton from '../CuteButton/CuteButton'
import Words from '../Words/Words'

export default class MapSortLegend extends React.Component {
  render(){
  const colorArray = [
    {color: "#539306", amount: "very high"},
    {color: "#87B725", amount: "high"},
    {color:  "#A1C02A", amount: "moderate"},
  {color: "#BCCA30", amount: "low"},
  {color: "#E1D837", amount: "very low"}
 ]
  let legendNodes = colorArray.map( (d,index) => {
    return(
      <div key={Date.now() + index} style={{background: d.color, height: "10%"}}>
      <h3 style={{marginTop: "0px", color: "#fff", padding: "10px"}}>{d.amount}</h3>
      </div>
    )
  })
  return(
    <div style={{width: "10%", zIndex: "5", height:"500px",
          position: "absolute", right: "2%", top: "35%", textAlign: "center"}}>
      {legendNodes}
    </div>
    )
  }
}
