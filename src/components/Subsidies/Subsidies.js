import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import CuteButton from '../CuteButton/CuteButton'


export const Subsidies = (props) => {

    return (

        <div className="row text-center info-row">
          <div className="col-md-9">
          <HorizontalBarChart countyName={props.selectedCounty}  countyData={props.countyData} chartTitle="subsidies"/>
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
