import React from 'react'
import Header from 'components/Header'
import Map from 'components/Map'
import FarmedLand from 'components/FarmedLand'
import FarmInfo from 'components/FarmInfo'
import TopCrops from 'components/TopCrops'
import Subsidies from 'components/Subsidies'
import CropProduction from 'components/CropProduction'
import ImportExport from 'components/ImportExport'
import MainSelector from 'components/MainSelector'
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
    {fips: '41045', color: 'red'},
    {fips: '41001', color: 'blue'}
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
<<<<<<< HEAD
        <MainSelector />
        <FarmedLand selectedCounty={this.props.selectedCounty} countyData={this.props.countyData} />
=======

        <FarmedLand selectedCounty={this.props.selectedCounty} countyData={this.props.countyData}/>
>>>>>>> upstream/line-chart-d3
        <FarmInfo selectedCounty={this.props.selectedCounty} countyData={this.props.countyData} />
        <TopCrops selectedCounty={this.props.selectedCounty} countyData={this.props.countyData} />
        <Subsidies selectedCounty={this.props.selectedCounty} countyData={this.props.countyData} />
        <CropProduction selectedCounty={this.props.selectedCounty} countyData={this.props.countyData} />
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

const mapDispatchToProps = (dispatch) => {
  return {putOneCountyInState: (countyName) => dispatch(putOneCountyInState(countyName)),
    putCountyDataInState: (countyData) => dispatch(putCountyDataInState(countyData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
