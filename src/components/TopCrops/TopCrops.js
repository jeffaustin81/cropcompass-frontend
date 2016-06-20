import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import Words from '../Words/Words'

export const TopCrops = (props) => {


  let infoRow = {
    background: "white",
    borderRadius: "5px",
    marginTop: "30px",
    padding: "20px",
    boxShadow: "1px 1px 25px -4px rgba(140,143,140,.5)",
    transition: "boxShadow .4s ease-in-out"
  }
  let paddingBorders = {
    borderBottom: "solid 1px #523c03",
    paddingBottom: "50px",
    paddingTop: "25px",
    marginBottom: "20px"
  }

  let selectedCropAcreData = ''
  let selectedCropHarvestData = ''
  if (props.countyData.commoditiesByAcre !== undefined){ selectedCropAcreData = props.countyData.commoditiesByAcre.filter( (d) => {
    return d.commodity === props.selectedCrop
  })
}

  if (props.countyData.commoditiesByHarvestThisYear !== undefined){selectedCropHarvestData = props.countyData.commoditiesByHarvestThisYear.filter( (d) => {
    return d.commodity === props.selectedCrop
  })
}

  if(selectedCropAcreData !== undefined) {selectedCropAcreData = selectedCropAcreData[0]}
  if(selectedCropHarvestData !== undefined) {selectedCropHarvestData = selectedCropHarvestData[0]}
  let commoditiesByAcre = props.countyData.commoditiesByAcre.slice(1,7)
  let commoditiesByHarvestThisYear = props.countyData.commoditiesByHarvestThisYear.slice(1,7)

    return (
        <div className="row" style={paddingBorders}>
          <div className="row">
            <h1>{props.selectedCounty} Top Crops</h1>
        </div>
      <div className="col-md-12" style={infoRow}>
            <div className="col-md-6">
            <HorizontalBarChart matchingCrop={selectedCropAcreData} countyName={props.selectedCounty} countyData={commoditiesByAcre} xMetric="acres" chartTitle={`Top crops by acreage in (**most recent year, usually 2012??**)`}/>
            </div>
            <div className="col-md-6">
            <HorizontalBarChart matchingCrop={selectedCropHarvestData} countyName={props.selectedCounty} countyData={commoditiesByHarvestThisYear} xMetric="harvested_acres" chartTitle={`Top crops by harvested acres in ${props.selectedYear}`}/>
            </div>
        </div>
      </div>
    )
  }


export default TopCrops
