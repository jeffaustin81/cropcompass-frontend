import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import CuteButton from '../CuteButton/CuteButton'
import Words from '../Words/Words'

export default class MapSortButtons extends React.Component {

  handleClick(metric){
    this.props.sortMapByChange(metric)
  }
  render(){
    let categoryList = ["subsidyLevel", "subsidyRecipients", "cropProduction", "numberOfFarms", "cropDiversity"]
    let selectedView = this.props.selectedView
    let buttonNodes = categoryList.map( (metric, index) => {
      let selectedCheck = ""
      if (selectedView === metric){
        selectedCheck = 'pink'
      }
      let metricClean = ''
      for(let i=0;i<metric.length;i++){
      if (metric[i] === metric[i].toUpperCase()) {
         metricClean = [metric.slice(0, i), ' ', metric.slice(i)].join('');
         metricClean = [metricClean[0].toUpperCase(), metricClean.slice(1, metricClean.length)].join('')
      }
    }
      return (
          <div key={Date.now() + index}>
            <CuteButton>
            <h3 style={{color: selectedCheck}} onClick={this.handleClick.bind(this, metric)}> {metricClean}</h3>
            </CuteButton>
            <br/>
          </div>
          )
          })
    return(
    <div style={{width: "20%", left:"2%", zIndex: "5", position: "absolute", top: "25%"}}>
        <CuteButton>
        <h2>Recolor the map</h2>
        </CuteButton>
        <br/>
        {buttonNodes}
    </div>
    )
  }
}
