import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import CuteButton from '../CuteButton/CuteButton'
import Words from '../Words/Words'

export const TopCrops = (props) => {
  let commoditiesByAcre = props.countyData.commoditiesByAcre.slice(1,7)
  let commoditiesByHarvestThisYear = props.countyData.commoditiesByHarvestThisYear.slice(1,7)

    return (
      <div className="row text-center info-row">
        <div className="row">
          <CuteButton>
            <h1>Top Crops in {props.selectedCounty}</h1>
          </CuteButton>
        </div>
        <div className="row">
            <div className="col-md-6">
            <HorizontalBarChart countyName={props.selectedCounty} countyData={commoditiesByAcre} xMetric="acres" chartTitle={`Top crops by acreage in (**most recent year, usually 2012??**)`}/>
            </div>
            <div className="col-md-6">
            <HorizontalBarChart countyName={props.selectedCounty} countyData={commoditiesByHarvestThisYear} xMetric="harvested_acres" chartTitle={`Top crops by harvested acres in ${props.selectedYear}`}/>
            </div>
        </div>
      </div>
    )
  }

export default TopCrops
