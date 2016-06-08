import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'


export const Subsidies = (props) => {

    return (

        <div className="row info-row">
          <div className="col-md-3">
          <h1>Subsidies Component</h1>
          </div>
          <div className="col-md-9">
          <HorizontalBarChart countyName={props.selectedCounty}  countyData={props.countyData} chartTitle="subsidies"/>
          </div>
        </div>
    )
  }

export default Subsidies
