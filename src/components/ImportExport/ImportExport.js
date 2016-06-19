import React from 'react'
import { IndexLink, Link } from 'react-router'
import CuteButton from '../CuteButton/CuteButton'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import LineChart from 'components/VisualizationsD3/LineChartD3/LineChart'
import Words from '../Words/Words'


export const ImportExport = (props) => {
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
            <h1>{props.selectedCounty} Imports & Exports</h1>
        </div>
        <div style={infoRow}>
        <div className="col-md-12">
            <div className="col-md-6">
            <HorizontalBarChart countyName={props.selectedCounty}  countyData={props.countyData} chartTitle={`Crop Imports`}/>
            </div>
            <div className="col-md-6">
            <HorizontalBarChart countyName={props.selectedCounty}  countyData={props.countyData} chartTitle={`Crop Exports`}/>
            </div>
        </div>
        <br/>

        <div className="row" style={{marginTop: "150px"}}>
          <div className="col-md-8">
            <div className="row">
              <LineChart selectedCounty={props.selectedCounty} title={`${props.selectedCrop} imports in ${props.selectedCounty} by year`} selectedCrop={props.selectedCrop} countyData={props.countyData}/>
            </div>
            <br/>
            <div className="row">
              <LineChart selectedCounty={props.selectedCounty} title={`${props.selectedCrop} exports in ${props.selectedCounty} by year.`} selectedCrop={props.selectedCrop} countyData={props.countyData}/>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Imports & Exports</h3>


              <p>Nullam eros mi, mollis in sollicitudin non, tincidunt sed enim. Sed et felis metus, rhoncus ornare nibh. Ut at magna leo. Suspendisse egestas est ac dolor imperdiet pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, erat sit amet venenatis luctus, augue libero ultrices quam, ut congue nisi risus eu purus. Cras semper consectetur elementum. Nulla vel aliquet libero. Vestibulum eget felis nec purus commodo convallis. Aliquam erat volutpat.  </p>

              <p>In facilisis scelerisque dui vel dignissim. Sed nunc orci, ultricies congue vehicula quis, facilisis a orci. In aliquet facilisis condimentum. Donec at orci orci, a dictum justo. Sed a nunc non lectus fringilla suscipit. Vivamus pretium sapien sit amet mauris aliquet eleifend vel vitae arcu. Fusce pharetra dignissim nisl egestas pretium.  </p>

              <p>Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.  </p>

          </div>
        </div>
      </div>
      </div>
    )
  }

export default ImportExport

//          <LineChartD3 dataset={props.productionHistory} selectedCounty={props.selectedCounty} title={`${props.selectedCrop} exports in ${props.selectedCounty} by year.`} selectedCrop={props.selectedCrop} countyData={props.countyData}/>
