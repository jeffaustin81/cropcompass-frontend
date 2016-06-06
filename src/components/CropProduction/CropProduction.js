import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'


export const CropProduction = () => {

    return (
      <div className="row">
        <div className="col-md-3">
        <h1>CropProduction Component</h1>
        </div>
        <div className="col-md-9">
        <HorizontalBarChart chartTitle="cropProduction" countyName="Jackson"/>
        </div>
      </div>
    )
  }

  export default CropProduction
