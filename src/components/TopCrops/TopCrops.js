import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import Words from '../Words/Words'

export const TopCrops = (props) => {
  let dataset = props.countyData.slice(2,4)
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
  return (
    <div className="row" style={paddingBorders}>
      <div className="row">
          <h1>{props.selectedCounty} Top Crops</h1>
      </div>
      <div className="col-md-12" style={infoRow}>
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
