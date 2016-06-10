import React from 'react'
import { IndexLink, Link } from 'react-router'
import CuteButton from '../CuteButton/CuteButton'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'


export const ImportExport = (props) => {

    return (
      <div className="row text-center info-row">
        <div className="col-md-9">
        <HorizontalBarChart countyName={props.selectedCounty} countyData={props.countyData} chartTitle="importExport"/>
        </div>
        <div className="col-md-3">
        <CuteButton>
        <h1>ImportExport Component</h1>
        </CuteButton>
        </div>
      </div>
    )
  }

export default ImportExport
