import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import CuteButton from '../CuteButton/CuteButton'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'


export const Subsidies = (props) => {
  let dataset = props.countyData.slice(2,4)

    return (

        <div className="row text-center info-row">
          <div className="col-md-6">
          <HorizontalBarChart countyName={props.selectedCounty}  countyData={props.countyData} chartTitle="subsidies"/>
          </div>
          <div className="col-md-3">
          <DonutD3 dataset={dataset} width="400" height="200"/>
          </div>
          <div className="col-md-3">
          <CuteButton>
          <h1>Subsidies Component</h1>
          </CuteButton>
          </div>
        </div>
    )
  }

export default Subsidies
