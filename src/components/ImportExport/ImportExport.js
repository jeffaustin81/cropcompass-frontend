import React from 'react'
import { IndexLink, Link } from 'react-router'
import CuteButton from '../CuteButton/CuteButton'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'


export const ImportExport = (props) => {
    let dataset = props.countyData.slice(2,4)

    return (
      <div style={{marginBottom: "30px"}} className="row text-center info-row">
        <div className="col-md-4">
        <HorizontalBarChart countyName={props.selectedCounty} countyData={props.countyData} chartTitle="importExport"/>
        </div>
        <div className="col-md-3">
        <CuteButton>
        <h1>ImportExport Component</h1>
        </CuteButton>
        </div>
        <div className="col-md-5">
        <DonutD3 dataset={dataset} width="400" height="200"/>
        </div>
      </div>
    )
  }

export default ImportExport
