import React from 'react'
import { IndexLink, Link } from 'react-router'
import CuteButton from '../CuteButton/CuteButton'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import LineChartD3 from 'components/VisualizationsD3/LineChartD3/LineChartD3'
import Words from '../Words/Words'


export default class ImportExport extends React.Component{

  handleClick(crop){
    this.props.changeExportChart(crop)
  }
    render(){
    let infoRow = {
      background: "white",
      borderRadius: "5px",
      marginTop: "30px",
      padding: "20px",
    }
    let paddingBorders = {
      borderBottom: "solid 1px #523c03",
      paddingBottom: "50px",
      paddingTop: "25px",
      marginBottom: "20px"
    }
    let allCropNamesEverNodes = this.props.allPossibleCrops.map( (crop,index) => {
      return(
        <div onClick={this.handleClick.bind(this, crop)} style={{display: "inline-block", padding: "5px", margin: "5px", background: "#87B725", border: "1px solid #E1D837", borderRadius: "5px"}} key={crop}>{crop}</div>
      )
    })
    let {handleShowHugeCropList, showHugeCropList} = this.props
    let hiddenStyle = {display: 'none'}
    let shownStyle = {display: 'block'}
    return (
      <div className="row info-row" style={paddingBorders}>
        <div className="row">
            <h1>{this.props.selectedCounty} Imports & Exports</h1>
        </div>
        <div style={infoRow}>
        <div className="col-md-12">
            <div className="col-md-6">
            <HorizontalBarChart countyName={this.props.selectedCounty}  countyData={this.props.countyData} chartTitle={`Crop Imports`}/>
            </div>
            <div className="col-md-6">
            <HorizontalBarChart countyName={this.props.selectedCounty}  countyData={this.props.countyData} chartTitle={`Crop Exports`}/>
            </div>
        </div>
        <br/>

        <div className="row" style={{marginTop: "150px"}}>
          <div className="col-md-8">
            <div className="row">
              <LineChartD3 selectedCounty={this.props.selectedCounty} xMetric="year" yMetric="export" dataset={this.props.exportsHistory} title={this.props.exportCrop.length > 0 ? `${this.props.exportCrop} exports by year in Oregon` : 'Overall exports by year in Oregon'} selectedCrop={this.props.selectedCrop} countyData={this.props.countyData}/>

            </div>
          </div>
          <div className="col-md-4">
            <h3>Imports & Exports</h3>


              <p>Nullam eros mi, mollis in sollicitudin non, tincidunt sed enim. Sed et felis metus, rhoncus ornare nibh. Ut at magna leo. Suspendisse egestas est ac dolor imperdiet pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor, erat sit amet venenatis luctus, augue libero ultrices quam, ut congue nisi risus eu purus. Cras semper consectetur elementum. Nulla vel aliquet libero. Vestibulum eget felis nec purus commodo convallis. Aliquam erat volutpat.  </p>

              <p>In facilisis scelerisque dui vel dignissim. Sed nunc orci, ultricies congue vehicula quis, facilisis a orci. In aliquet facilisis condimentum. Donec at orci orci, a dictum justo. Sed a nunc non lectus fringilla suscipit. Vivamus pretium sapien sit amet mauris aliquet eleifend vel vitae arcu. Fusce pharetra dignissim nisl egestas pretium.  </p>

              <p>Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.  </p>
              <CuteButton>
              <div onClick={handleShowHugeCropList.bind(this)}> Click to <span style={{fontSize:"2em"}}>{showHugeCropList ? 'hide' : 'see'}</span> our huge, clickable list of all {this.props.allPossibleCrops.length} Oregon exports</div>
              </CuteButton>
          </div>
          <div className="row" style={showHugeCropList ? shownStyle : hiddenStyle}>
          {allCropNamesEverNodes}
          </div>
        </div>
      </div>
      </div>
    )
  }
}
