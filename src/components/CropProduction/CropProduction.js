import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import CuteButton from '../CuteButton/CuteButton'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'


export const CropProduction = (props) => {
  let dataset = props.countyData.slice(2,4)

    return (
      <div className="row text-center info-row">
        <div className="col-md-3">
        <CuteButton>
        <h1>CropProduction Component</h1>
        </CuteButton>
        </div>
        <div className="col-md-3">
        <DonutD3 dataset={dataset} width="400" height="200"/>
        </div>
        <div className="col-md-offset-1 col-md-5">
        <HorizontalBarChart chartTitle="cropProduction" countyData={props.countyData} countyName={props.selectedCounty}/>
        </div>
      </div>
    )
  }

  export default CropProduction
