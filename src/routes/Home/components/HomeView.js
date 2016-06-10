import React from 'react'
import Header from 'components/Header'
import Map from 'components/Map'
import FarmedLand from 'components/FarmedLand'
import FarmInfo from 'components/FarmInfo'
import TopCrops from 'components/TopCrops'
import Subsidies from 'components/Subsidies'
import CropProduction from 'components/CropProduction'
import ImportExport from 'components/ImportExport'
import LineChartD3 from 'components/VisualizationsD3/LineChartD3/LineChartD3'
import { connect } from 'react-redux'

class HomeView extends React.Component {
  componentDidMount(){
    d3.json(`http://api.cropcompass.org/data/nass_commodity_area?region=Multnomah`, (d) =>
          {
                  let rawData = d.data.sort(function(a, b) {
                      return b.acres - a.acres;
                  })
                  this.props.putCountyDataInState(rawData)
          })
  }



  render(){
  let someArray = [
    {fips: '41001', color: '#E1D837'},
    {fips: '41003', color: '#E1D837'},
    {fips: '41005', color: '#E1D837'},
    {fips: '41007', color: '#E1D837'},
    {fips: '41009', color: '#E1D837'},
    {fips: '41011', color: '#E1D837'},
    {fips: '41013', color: '#E1D837'},
    {fips: '41015', color: '#E1D837'},
    {fips: '41017', color: '#E1D837'},
    {fips: '41019', color: '#E1D837'},
    {fips: '41021', color: '#E1D837'},
    {fips: '41023', color: '#E1D837'},
    {fips: '41025', color: '#E1D837'},
    {fips: '41027', color: '#E1D837'},
    {fips: '41029', color: '#E1D837'},
    {fips: '41031', color: '#E1D837'},
    {fips: '41033', color: '#E1D837'},
    {fips: '41035', color: '#E1D837'},
    {fips: '41037', color: '#E1D837'},
    {fips: '41039', color: '#E1D837'},
    {fips: '41041', color: '#E1D837'},
    {fips: '41043', color: '#E1D837'},
    {fips: '41045', color: '#E1D837'},
    {fips: '41047', color: '#E1D837'},
    {fips: '41049', color: '#E1D837'},
    {fips: '41051', color: '#E1D837'},
    {fips: '41053', color: '#E1D837'},
    {fips: '41055', color: '#E1D837'},
    {fips: '41057', color: '#E1D837'},
    {fips: '41059', color: '#E1D837'},
    {fips: '41061', color: '#E1D837'},
    {fips: '41063', color: '#E1D837'},
    {fips: '41065', color: '#E1D837'},
    {fips: '41067', color: '#E1D837'},
    {fips: '41069', color: '#E1D837'},
    {fips: '41071', color: '#E1D837'},

  ]

    const handleCountySelect = (thing) => {
      this.props.putOneCountyInState(thing.name)
      d3.json(`http://api.cropcompass.org/data/nass_commodity_area?region=${thing.name}`, (d) =>
          {
                  let rawData = d.data.sort(function(a, b) {
                      return b.acres - a.acres;
                  })
                  this.props.putCountyDataInState(rawData)
        })
    }


  return (
    <div>
      <Header />
      <div className="row" style={{height:"50em"}}>
        <Map countyColors={someArray} width={'100%'} height={'100%'}
          selectedCounty={'41'} onCountySelect={handleCountySelect} />
      </div>

        <FarmedLand selectedCounty={this.props.selectedCounty} countyData={this.props.countyData}/>
        <FarmInfo selectedCounty={this.props.selectedCounty} countyData={this.props.countyData} />
        <TopCrops selectedCounty={this.props.selectedCounty} countyData={this.props.countyData} />
        <Subsidies selectedCounty={this.props.selectedCounty} countyData={this.props.countyData}/>
        <CropProduction selectedCounty={this.props.selectedCounty} countyData={this.props.countyData}/>
        <ImportExport selectedCounty={this.props.selectedCounty} countyData={this.props.countyData} />
        <LineChartD3 />

    </div>
  )
  }
}
const mapStateToProps = (state) => {
	    return {
        selectedCounty: state.countyName,
        countyData: state.countyData,

        }
}

const putOneCountyInState = (countyName) => {
	return {type:"SELECT_COUNTY", payload: countyName }
}

const putCountyDataInState = (countyData) => {
	return {type:"ADD_COUNTY_DATA", payload: countyData }
}


export default connect(mapStateToProps, {putOneCountyInState, putCountyDataInState})(HomeView)
