import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import CuteButton from '../CuteButton/CuteButton'
import Words from '../Words/Words'

export default class MapSortLegend extends React.Component {
  render(){
  const colorArray = [
    {color: "#E1D837", amount: "very low"},
  {color: "#BCCA30", amount: "low"},
  {color:  "#A1C02A", amount: "moderate"},
   {color: "#87B725", amount: "high"},
   {color: "#5EAA00", amount: "very high"}
 ]
  let legendNodes = colorArray.map( (d,index) => {
    return(
      <div key={Date.now() + index} style={{ height:"10%", background: d.color}}>
      <h3 style={{marginTop: "5%"}}>{d.amount}</h3>
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
