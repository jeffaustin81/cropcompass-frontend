import React from 'react'
import Map from 'components/Map'
import FarmedLand from 'components/FarmedLand'
import FarmInfo from 'components/FarmInfo'
import TopCrops from 'components/TopCrops'
import Subsidies from 'components/Subsidies'
import CropProduction from 'components/CropProduction'
import ImportExport from 'components/ImportExport'
import HorizontalBarChart from 'components/HorizontalBarChart/HorizontalBarChart'

export const HomeView = () => {
  const handleCountySelect = (thing) => {
    console.log(thing.name);
    console.log(thing.fips);
  }
  let someArray = [
    {fips: '41045', color: 'red'},
    {fips: '41001', color: 'blue'}
  ]

  return (
    <div>
      <Map countyColors={someArray} width={'500px'} height={'500px'}
        selectedCounty={'41'} onCountySelect={handleCountySelect} />
        <FarmedLand />
        <FarmInfo />
        <TopCrops />
        <Subsidies />
        <CropProduction />
        <ImportExport/>
      <HorizontalBarChart />
    </div>)
}

export default HomeView
