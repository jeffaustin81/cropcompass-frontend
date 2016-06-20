import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import CuteButton from '../CuteButton/CuteButton'
import Words from '../Words/Words'
import _ from 'lodash'

export default class MapSortButtons extends React.Component {

  handleClick(metric){
    this.props.sortMapByChange(metric)
  }
  render(){
    let intitialStyles = {
      border: "solid 2px #60a81d",
      color: "#60a81d",
      cursor: "pointer",
      margin: "0",
      padding: "10px",
      textAlign: "center",
      display: "inline-block"
    }

    let categoryList = ["subsidyLevel", "subsidyRecipients", "cropProduction", "numberOfFarms", "cropDiversity"]
    let selectedView = this.props.selectedView
    let buttonNodes = categoryList.map( (metric, index) => {
      let selectedCheck = {}
      if (selectedView === metric){
        selectedCheck = {
          backgroundColor: "#60a81d",
          color: "#fff",
          border: "solid 2px #60a81d",
        }

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

                <h3 style={_.merge({}, intitialStyles, selectedCheck)} onClick={this.handleClick.bind(this, metric)}> {metricClean}</h3>


            <br/>
          </div>
      )
    })
      return(
      <div>
          <br/>
          {buttonNodes}
      </div>
      )
  }
}
