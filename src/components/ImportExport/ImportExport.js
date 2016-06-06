import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'


export const ImportExport = () => {

    return (
      <div className="row info-row">
        <div className="col-md-3">
        <h1>ImportExport Component</h1>
        </div>
        <div className="col-md-9">
        <HorizontalBarChart />
        </div>
      </div>
    )
  }

export default ImportExport
