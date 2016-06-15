import React from 'react'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import { IndexLink, Link } from 'react-router'
import CuteButton from '../CuteButton/CuteButton'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'

export const FarmedLand = (props) => {
  let dataset = props.countyData.slice(2,4)

    return (
      <div style={{marginTop: "50px"}} className="info-row text-center row">
        <div className="col-md-3">
        <CuteButton>
        <h1>FarmedLand Component</h1>
        </CuteButton>
        </div>
        <div className="col-md-3">
        <DonutD3 dataset={dataset} width="400" height="200"/>
        </div>
        <div className="col-md-6">
        <HorizontalBarChart chartTitle="farmedLand"  countyData={props.countyData} countyName={props.selectedCounty}/>
        </div>
      </div>
    )
  }

export default FarmedLand
