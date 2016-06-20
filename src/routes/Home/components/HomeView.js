import React from 'react'
import Header from 'components/Header'
import Map from 'components/Map'
import FarmedLand from 'components/FarmedLand'
import FarmInfo from 'components/FarmInfo'
import TopCrops from 'components/TopCrops'
import Subsidies from 'components/Subsidies'
import CropProduction from 'components/CropProduction/CropProduction'
import CropDiversity from 'components/CropDiversity/CropDiversity'
import ImportExport from 'components/ImportExport'
import MainSelector from 'components/MainSelector'
import SideMenu from 'components/SideMenu/SideMenu'
import MapSortButtons from 'components/MapSortButtons/MapSortButtons'
import MapSortLegend from 'components/MapSortLegend/MapSortLegend'
import { connect } from 'react-redux'

class HomeView extends React.Component {
  componentWillMount(){
    d3.json(`http://api.cropcompass.org:8000/table/commodity_area/?county=Multnomah`, (d) =>
          {
                  let rawData = d.data.sort(function(a, b) {
                      return b.acres - a.acres;
                  })
                  this.props.putCountyCommodityAcreDataInState(rawData)
          })
          d3.json(`http://api.cropcompass.org:8000/data/oain_harvest_acres/?fips=41051&year=2010`, (d) =>
                      {
                              let rawData = d.data.sort(function(a, b) {
                                  return b.harvested_acres - a.harvested_acres;
                              })
                              this.props.putCountyCommodityHarvestDataInState(rawData)
                      })
        d3.json(`http://api.cropcompass.org:8000/table/oregon_exports_timeline/?commodity=Alfalfa%20Seeds%20Of%20A%20Kind%20Used%20For%20Sowing`, (d) =>
                      {
                              let rawData = d.data.sort(function(a, b) {
                                  return b.year - a.year;
                              })
                              this.props.populateExportLineChart(rawData)
                      })
    d3.json(`http://api.cropcompass.org:8000/data/oain_harvest_acres/?fips=41051&commodity=Wheat`, (d) =>
                    {
                            let rawData = d.data.sort(function(a, b) {
                                return b.year - a.year;
                            })
                            this.props.putCountyCommodityHarvestHistoryInState(rawData)
                        })

    d3.json(`http://api.cropcompass.org:8000/data/subsidy_dollars/?county=Multnomah&year=2010`, (d) =>
                {
                    let rawData = d.data.sort(function(a, b) {
                        return b.subsidy_dollars - a.subsidy_dollars;
                        })
                    this.props.putCountySubsidyDataInState(rawData)
                        })

    d3.json('http://api.cropcompass.org:8000/data/oain_harvest_acres/?fips=41051', (d) =>
          {
                  let rawData = d.data.map( (item) => {
                    return item.commodity
                  })
                  let nonRepeated = []
                  for(let i=0;i<rawData.length;i++){
                    if (nonRepeated.indexOf(rawData[i]) < 0){
                      nonRepeated.push(rawData[i])
                    }
                  }
                  this.props.putCropListInState(nonRepeated)
                  })


              d3.json('http://api.cropcompass.org:8000/table/county_stats/', (d) =>
                    {
                            let rawData = d.data.map( (item) => {
                              return item
                            })
                            this.props.putCountyListInState(rawData)
                            })
            d3.json('http://api.cropcompass.org:8000/table/oregon_export_commodities/', (d) =>
                  {
                      let rawData = d.data.map( (item) => {
                          return item
                          })
                          this.props.fetchAllPossibleCrops(rawData)
                          })
            d3.json('http://api.cropcompass.org:8000/data/crop_diversity/', (d) =>
                    {

                            this.props.fetchDiversityList(d)
                            })

              }






  render(){
    let { putOneCropInState, putOneCountyInState, handleOffMenu,  fetchDiversityList, diversityList,
      putCountyCommodityAcreDataInState, handleShowCropMenu, handleShowCountyMenu, exportCrop, showHugeCropList,
       showMenus, selectedCrop, countyData, selectedCounty, cropList, handleExportClick, handleShowHugeCropList,
       changeYear, selectedYear, cropData, countyList, sortMapBy, sortMapByChange, exportsHistory, allPossibleCrops } = this.props



    const handleCountySelect = (county, crop, selectedYear) => {
      if(crop===undefined){crop = selectedCrop}

      putOneCountyInState(county)
      putOneCropInState(crop)
      let thing = county
      d3.json(`http://api.cropcompass.org:8000/table/commodity_area/?county=${thing.name}`, (d) =>
            {
                    let rawData = d.data.sort(function(a, b) {
                        return b.acres - a.acres;
                    })
                    this.props.putCountyCommodityAcreDataInState(rawData)
            })
      d3.json(`http://api.cropcompass.org:8000/data/oain_harvest_acres/?fips=${thing.fips}&year=${selectedYear}`, (d) =>
                  {
                          let rawData = d.data.sort(function(a, b) {
                              return b.harvested_acres - a.harvested_acres;
                          })
                          this.props.putCountyCommodityHarvestDataInState(rawData)
                  })
      d3.json(`http://api.cropcompass.org:8000/data/oain_harvest_acres/?fips=${thing.fips}&commodity=${crop}`, (d) =>
                      {
                              let rawData = d.data.sort(function(a, b) {
                                  return b.year - a.year;
                              })
                              this.props.putCountyCommodityHarvestHistoryInState(rawData)
                          })

      d3.json(`http://api.cropcompass.org:8000/data/subsidy_dollars/?county=${thing.name}&year=${selectedYear}`, (d) =>
                  {
                      let rawData = d.data.sort(function(a, b) {
                          return b.subsidy_dollars - a.subsidy_dollars;
                          })
                      this.props.putCountySubsidyDataInState(rawData)
                          })

        d3.json(`http://api.cropcompass.org:8000/data/oain_harvest_acres/?fips=${thing.fips}`, (d) =>
                    {
                                let rawData = d.data.map( (item) => {
                                  return item.commodity
                                })
                                let nonRepeated = []
                                for(let i=0;i<rawData.length;i++){
                                  if (nonRepeated.indexOf(rawData[i]) < 0){
                                    nonRepeated.push(rawData[i])
                                  }
                                }
                                this.props.putCropListInState(nonRepeated)
                                })

    }

const changeExportChart = (crop) => {
  this.props.handleExportClick(crop)
  d3.json(`http://api.cropcompass.org:8000/table/oregon_exports_timeline/?commodity=${crop}`, (d) =>
                {
                        let rawData = d.data.sort(function(a, b) {
                            return b.year - a.year;
                        })
                        this.props.populateExportLineChart(rawData)
                })}

    let someArray = countyList


  return (
    <div style={{xOverflow: "hidden"}}>
      <Header handleOffMenu={handleOffMenu} handleShowCropMenu={handleShowCropMenu} handleShowCountyMenu={handleShowCountyMenu} selectedCounty={selectedCounty.name} selectedCrop={selectedCrop}/>
      {showMenus.cropMenu ?
      <div>
      <SideMenu selectedYear={selectedYear} changeYear={changeYear} cropList={cropList} countyList={someArray} showMenus={showMenus} menuType="crop" handleOffMenu={handleOffMenu} onSelect={handleCountySelect} putOneCountyInState={putOneCountyInState} putOneCropInState={putOneCropInState} selectedCrop={selectedCrop} selectedCounty={selectedCounty}> the menu is here</SideMenu>
      </div>
      : ""
      }
      { showMenus.countyMenu ?
      <div>
      <SideMenu selectedYear={selectedYear} changeYear={changeYear} cropList={cropList} countyList={someArray} showMenus={showMenus} menuType="county" handleOffMenu={handleOffMenu} onSelect={handleCountySelect} putOneCountyInState={putOneCountyInState} putOneCropInState={putOneCropInState} selectedCrop={selectedCrop} selectedCounty={selectedCounty}> the menu is here</SideMenu>
      </div>
      : ""
      }
      <div onClick={showMenus.cropMenu || showMenus.countyMenu ? handleOffMenu : null}>
      <MapSortLegend />
      <div className="row" style={{height:"50em"}}>
        <Map selectedCounty={selectedCounty} sortMapBy={sortMapBy} countyColors={someArray} width={'100%'} height={'500px'} zoomLevel={7}
           onCountySelect={handleCountySelect} />
      </div>
      <MapSortButtons selectedView={sortMapBy} sortMapByChange={sortMapByChange}/>

        <FarmedLand selectedYear={selectedYear} selectedCounty={selectedCounty.name} countyData={countyData.commoditiesByAcre}/>
        <FarmInfo selectedYear={selectedYear} countyList={countyList} selectedCounty={selectedCounty.name} countyData={countyData.commoditiesByAcre} />
        <TopCrops selectedCrop={selectedCrop} selectedYear={selectedYear} selectedCounty={selectedCounty.name} countyData={countyData} />
        <CropDiversity diversityList={diversityList} selectedYear={selectedYear} countyList={countyList} selectedCounty={selectedCounty.name} selectedCrop={selectedCrop} countyData={countyData} />
        <Subsidies selectedYear={selectedYear} countyList={countyList} selectedCounty={selectedCounty.name} selectedCrop={selectedCrop} countyData={countyData} />
        <CropProduction selectedYear={selectedYear} countyList={countyList} selectedCounty={selectedCounty.name} selectedCrop={selectedCrop} dataset={countyData.commoditiesByHarvestHistory}/>
        <ImportExport showHugeCropList={showHugeCropList} handleShowHugeCropList={handleShowHugeCropList} changeExportChart={changeExportChart} handleExportClick={handleExportClick} exportCrop={exportCrop} allPossibleCrops={allPossibleCrops} exportsHistory={exportsHistory} selectedYear={selectedYear} productionHistory={this.props.countyData.commoditiesByHarvestHistory} selectedCounty={selectedCounty.name} selectedCrop={selectedCrop} countyData={countyData.commoditiesByAcre} />
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
        showMenus: state.showMenus,
        cropList: state.cropList,
        countyList: state.countyList,
        cropData: state.cropData,
        sortMapBy: state.sortMapBy,
        selectedYear: state.selectedYear,
        exportsHistory: state.exportsHistory,
        allPossibleCrops: state.allPossibleCrops,
        exportCrop: state.exportCrop,
        showHugeCropList: state.showHugeCropList,
        diversityList: state.diversityList
        }
}

const putOneCountyInState = (countyName) => {
	return {type:"SELECT_COUNTY", payload: countyName }
}

const putOneCropInState = (cropInfo) => {
	return {type:"SELECT_CROP", payload: cropInfo }
}

const sortMapByChange = (metric) => {
	return {type:"SORT_MAP", payload: metric }
}

const handleExportClick = (exportCrop) => {
	return {type:"CHANGE_EXPORT_CROP", payload: exportCrop }
}

const putCountyCommodityHarvestDataInState = (countyData) => {
	return {type:"ADD_COUNTY_COMMODITY_HARVEST_DATA", payload: countyData }
}

const putCountyCommodityHarvestHistoryInState = (countyData) => {
	return {type:"ADD_COUNTY_COMMODITY_HARVEST_HISTORY", payload: countyData }
}

const putCountyCommodityAcreDataInState = (countyData) => {
	return {type:"ADD_COUNTY_COMMODITY_ACRE_DATA", payload: countyData }
}

const populateExportLineChart = (exportData) => {
	return {type:"POPULATE_EXPORTS", payload: exportData }
}


const fetchDiversityList = (diversityList) => {
	return {type:"FETCH_DIVERSITY_LIST", payload: diversityList }
}


const putCountySubsidyDataInState = (countyData) => {
	return {type:"ADD_COUNTY_SUBSIDY_DATA", payload: countyData }
}

const putCropListInState = (cropsList) => {
	return {type:"FETCH_CROPS_LIST", payload: cropsList }
}


const putCountyListInState = (countyListData) => {
	return {type:"FETCH_COUNTY_LIST", payload: countyListData }
}

const handleShowCountyMenu = () => {
	return {type:"TOGGLE_SHOW_COUNTY_MENU"}
}

const handleShowHugeCropList = () => {
	return {type:"TOGGLE_HUGE_CROP_LIST"}
}


const handleOffMenu = () => {
	return {type:"CLEAR_ALL_MENUS"}
}

const handleShowCropMenu = () => {
	return {type:"TOGGLE_SHOW_CROP_MENU"}
}

const fetchAllPossibleCrops = (cropList) => {
  return {type:"FETCH_ALL_POSSIBLE_CROPS", payload: cropList}

}

const changeYear = (newYear) => {
	return {type:"CHANGE_YEAR", payload: newYear}
}


export default connect(mapStateToProps,
        {putOneCountyInState,
          handleOffMenu,
          handleShowCropMenu,
          handleShowCountyMenu,
          putCropListInState,
          putCountyListInState,
          putCountyCommodityAcreDataInState,
          putCountyCommodityHarvestDataInState,
          putCountyCommodityHarvestHistoryInState,
          putCountySubsidyDataInState,
          populateExportLineChart,
          sortMapByChange,
          handleExportClick,
          changeYear,
          fetchAllPossibleCrops,
          handleShowHugeCropList,
          fetchDiversityList,
          putOneCropInState})(HomeView)

/*
          let someHardCodedArray = [
            {fips: '41001', color: '#E1D837', name: 'Baker', numberOfFarms: '1000'},
            {fips: '41003', color: '#E1D837', name: 'Benton', numberOfFarms: '2000'},
            {fips: '41005', color: '#E1D837', name: 'Clackamas', numberOfFarms: '3000'},
            {fips: '41007', color: '#E1D837', name: 'Clastop', numberOfFarms: '4000'},
            {fips: '41009', color: '#E1D837', name: 'Columbia', numberOfFarms: '5000'},
            {fips: '41011', color: '#E1D837', name: 'Coos', numberOfFarms: '1000'},
            {fips: '41013', color: '#E1D837', name: 'Crook', numberOfFarms: '2000'},
            {fips: '41015', color: '#E1D837', name: 'Curry', numberOfFarms: '3000'},
            {fips: '41017', color: '#E1D837', name: 'Deschutes', numberOfFarms: '4000'},
            {fips: '41019', color: '#E1D837', name: 'Douglas', numberOfFarms: '5000'},
            {fips: '41021', color: '#E1D837', name: 'Gilliam', numberOfFarms: '1000'},
            {fips: '41023', color: '#E1D837', name: 'Grant', numberOfFarms: '2000'},
            {fips: '41027', color: '#E1D837', name: 'Harney', numberOfFarms: '3000'},
            {fips: '41025', color: '#E1D837', name: 'Hood River', numberOfFarms: '4000'},
            {fips: '41029', color: '#E1D837', name: 'Jackson', numberOfFarms: '5000'},
            {fips: '41031', color: '#E1D837', name: 'Jefferson', numberOfFarms: '1000'},
            {fips: '41033', color: '#E1D837', name: 'Josephine', numberOfFarms: '2000'},
            {fips: '41035', color: '#E1D837', name: 'Klamath', numberOfFarms: '3000'},
            {fips: '41037', color: '#E1D837', name: 'Lake', numberOfFarms: '4000'},
            {fips: '41039', color: '#E1D837', name: 'Lane', numberOfFarms: '5000'},
            {fips: '41041', color: '#E1D837', name: 'Lincoln', numberOfFarms: '1000'},
            {fips: '41043', color: '#E1D837', name: 'Linn', numberOfFarms: '2000'},
            {fips: '41045', color: '#E1D837', name: 'Malheur', numberOfFarms: '3000'},
            {fips: '41047', color: '#E1D837', name: 'Marion', numberOfFarms: '4000'},
            {fips: '41049', color: '#E1D837', name: 'Morrow', numberOfFarms: '1000'},
            {fips: '41051', color: '#E1D837', name: 'Multnomah', numberOfFarms: '5000'},
            {fips: '41053', color: '#E1D837', name: 'Polk', numberOfFarms: '2000'},
            {fips: '41055', color: '#E1D837', name: 'Sherman', numberOfFarms: '3000'},
            {fips: '41057', color: '#E1D837', name: 'Tillamook', numberOfFarms: '4000'},
            {fips: '41059', color: '#E1D837', name: 'Umatilla', numberOfFarms: '5000'},
            {fips: '41061', color: '#E1D837', name: 'Union', numberOfFarms: '1000'},
            {fips: '41063', color: '#E1D837', name: 'Wallowa', numberOfFarms: '2000'},
            {fips: '41065', color: '#E1D837', name: 'Wasco', numberOfFarms: '3000'},
            {fips: '41067', color: '#E1D837', name: 'Washington', numberOfFarms: '4000'},
            {fips: '41069', color: '#E1D837', name: 'Wheeler', numberOfFarms: '5000'},
            {fips: '41071', color: '#E1D837', name: 'Yamhill', numberOfFarms: '1000'},

          ]*/
