import React from 'react'
import Header from 'components/Header'
import Map from 'components/Map'
import FarmedLand from 'components/FarmedLand'
import FarmInfo from 'components/FarmInfo'
import TopCrops from 'components/TopCrops'
import Subsidies from 'components/Subsidies'
import CropProduction from 'components/CropProduction'
import ImportExport from 'components/ImportExport'

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
      <Header />
      <div className="row" style={{height:"50em"}}>
        <Map countyColors={someArray} width={'100%'} height={'100%'}
          selectedCounty={'41'} onCountySelect={handleCountySelect} />
      </div>
        <FarmedLand />
        <FarmInfo />
        <TopCrops />
        <Subsidies />
        <CropProduction />
        <ImportExport/>
    </div>
  )
}

export default HomeView
