import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import CuteButton from '../CuteButton/CuteButton'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'

export const FarmInfo = (props) => {
    let dataset = props.countyData.slice(2,4)
    return (
      <div className="row text-center info-row">
        <div className="col-md-4">
        <DonutD3 dataset={dataset} width="400" height="200"/>
        </div>
        <div className="col-md-offset-1 col-md-3">
        <CuteButton>
        <h1>FarmInfo Component</h1>
        </CuteButton>
        </div>
        <div className="col-md-4">
        <HorizontalBarChart countyName={props.selectedCounty} countyData={props.countyData} chartTitle="farmInfo"/>
        </div>
      </div>
    )
  }

export default FarmInfo
