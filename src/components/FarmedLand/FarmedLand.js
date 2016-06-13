import React from 'react'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import { IndexLink, Link } from 'react-router'
import CuteButton from '../CuteButton/CuteButton'


export const FarmedLand = (props) => {

    return (
      <div className="info-row text-center row">
        <div className="col-md-3">
        <CuteButton>
        <h1>FarmedLand Component</h1>
        </CuteButton>
        </div>
        <div className="col-md-9">
        <HorizontalBarChart chartTitle="farmedLand"  countyData={props.countyData} countyName={props.selectedCounty}/>
        </div>
      </div>
    )
  }

export default FarmedLand
