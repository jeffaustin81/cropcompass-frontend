import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import CuteButton from '../CuteButton/CuteButton'
import Words from '../Words/Words'

export const TopCrops = (props) => {
  let dataset = props.countyData.slice(2,4)

    return (
      <div className="row text-center info-row">
        <div className="row">
          <CuteButton>
            <h1>TopCrops Component</h1>
          </CuteButton>
        </div>
        <div className="row">
            <div className="col-md-6">
            <HorizontalBarChart countyName={props.selectedCounty}  countyData={props.countyData} chartTitle="Top crops by revenue"/>
            </div>
            <div className="col-md-6">
            <HorizontalBarChart countyName={props.selectedCounty}  countyData={props.countyData} chartTitle="Top crops by harvest"/>
            </div>
        </div>
      </div>
    )
  }

export default TopCrops
