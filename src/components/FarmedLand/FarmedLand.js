import React from 'react'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import { IndexLink, Link } from 'react-router'


export const FarmedLand = () => {

    return (
      <div className="row">
        <div className="col-md-3">
        <h1>FarmedLand Component</h1>
        </div>
        <div className="col-md-9">
        <HorizontalBarChart />
        </div>
      </div>
    )
  }

export default FarmedLand
