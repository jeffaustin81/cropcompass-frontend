import React from 'react'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import { IndexLink, Link } from 'react-router'


export const FarmedLand = (props) => {

    return (
      <div className="row">
        <div className="col-md-3">
        <h1>FarmedLand Component</h1>
        </div>
        <div className="col-md-9">
        <HorizontalBarChart chartTitle="farmedLand"  countyData={props.countyData} countyName={props.selectedCounty}/>
        </div>
      </div>
    )
  }

export default FarmedLand
