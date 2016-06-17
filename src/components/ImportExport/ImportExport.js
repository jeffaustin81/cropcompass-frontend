import React from 'react'
import { IndexLink, Link } from 'react-router'
import CuteButton from '../CuteButton/CuteButton'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import LineChartD3 from 'components/VisualizationsD3/LineChartD3/LineChartD3'
import Words from '../Words/Words'


export const ImportExport = (props) => {
    let dataset = props.countyData.slice(2,4)

    return (
      <div className="row text-center info-row">
        <div className="row">
          <CuteButton>
            <h1>Imports and exports in {props.selectedCounty}</h1>
          </CuteButton>
        </div>
        <div className="row">
            <div className="col-md-6">
            <HorizontalBarChart countyName={props.selectedCounty}  countyData={props.countyData} chartTitle={`Top 5 crop imports in ${props.selectedCounty}`}/>
            </div>
            <div className="col-md-6">
            <HorizontalBarChart countyName={props.selectedCounty}  countyData={props.countyData} chartTitle={`Top 5 crop exports in ${props.selectedCounty}`}/>
            </div>
        </div>
        <br/>
        <div className="row">
          <LineChartD3 selectedCounty={props.selectedCounty} title={`${props.selectedCrop} imports in ${props.selectedCounty} by year`} selectedCrop={props.selectedCrop} countyData={props.countyData}/>
        </div>
        <br/>
        <div className="row">
          <LineChartD3 selectedCounty={props.selectedCounty} title={`${props.selectedCrop} exports in ${props.selectedCounty} by year.`} selectedCrop={props.selectedCrop} countyData={props.countyData}/>
        </div>
      </div>
    )
  }

export default ImportExport
