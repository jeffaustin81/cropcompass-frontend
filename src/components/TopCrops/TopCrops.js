import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import CuteButton from '../CuteButton/CuteButton'

export const TopCrops = (props) => {
  let dataset = props.countyData.slice(2,4)

    return (
      <div className="row text-center info-row">
        <div className="col-md-3">
        <DonutD3 dataset={dataset} width="400" height="200"/>
        </div>
        <div className="col-md-3">
        <CuteButton>
        <h1>TopCrops Component</h1>
        </CuteButton>
        </div>
        <div className="col-md-3">
        <HorizontalBarChart countyName={props.selectedCounty}  countyData={props.countyData} chartTitle="topCrops"/>
        </div>
      </div>
    )
  }

export default TopCrops
