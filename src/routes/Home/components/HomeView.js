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
import SideMenu from 'components/SideMenu/SideMenu'
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
    let { handleShowMenu, putOneCropInState,
      putCountyDataInState, putOneCountyInState,
       showMenu, selectedCrop, selectedCounty, countyData } = this.props
  let someArray = [
    {fips: '41001', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41003', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41005', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41007', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41009', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41011', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41013', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41015', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41017', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41019', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41021', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41023', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41025', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41027', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41029', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41031', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41033', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41035', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41037', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41039', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41041', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41043', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41045', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41047', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41049', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41051', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41053', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41055', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41057', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41059', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41061', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41063', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41065', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41067', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41069', color: '#E1D837', name: 'nameOfCounty'},
    {fips: '41071', color: '#E1D837', name: 'nameOfCounty'},

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
      <Header handleShowMenu={handleShowMenu} selectedCounty={selectedCounty} selectedCrop={selectedCrop}/>
      <SideMenu showMenu={showMenu} menuType="crop" handleShowMenu={handleShowMenu} putOneItemInState={putOneCropInState}> the menu is here</SideMenu>
      <SideMenu showMenu={showMenu} menuType="county" handleShowMenu={handleShowMenu} onCountySelect={handleCountySelect} putOneItemInState={putOneCountyInState}> the menu is here</SideMenu>
      <div onClick={showMenu ? handleShowMenu : null}>
      <div className="row" style={{height:"50em"}}>
        <Map countyColors={someArray} width={'100%'} height={'500px'} zoomLevel={7}
          selectedCounty={'41'} onCountySelect={handleCountySelect} />
      </div>
        <FarmedLand selectedCounty={selectedCounty} countyData={countyData}/>
        <FarmInfo selectedCounty={selectedCounty} countyData={countyData} />
        <TopCrops selectedCounty={selectedCounty} countyData={countyData} />
        <LineChartD3 selectedCounty={selectedCounty} selectedCrop={selectedCrop} countyData={countyData}/>
        <Subsidies selectedCounty={selectedCounty} countyData={countyData} />
        <CropProduction selectedCounty={selectedCounty} countyData={countyData} />
        <ImportExport selectedCounty={selectedCounty} countyData={countyData} />
        </div>
    </div>
  )
  }
}
const mapStateToProps = (state) => {
	    return {
        selectedCounty: state.countyName,
        selectedCrop: state.cropName,
        countyData: state.countyData,
        showMenu: state.showMenu
        }
}

const putOneCountyInState = (countyName) => {
	return {type:"SELECT_COUNTY", payload: countyName }
}

const putOneCropInState = (cropName) => {
	return {type:"SELECT_CROP", payload: cropName }
}

const putCountyDataInState = (countyData) => {
	return {type:"ADD_COUNTY_DATA", payload: countyData }
}

const handleShowMenu = () => {
	return {type:"TOGGLE_SHOW_MENU"}
}


export default connect(mapStateToProps, {putOneCountyInState, putCountyDataInState, handleShowMenu, putOneCropInState})(HomeView)
