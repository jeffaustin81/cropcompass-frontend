import React from 'react'
import Map from 'components/Map'
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
      <h4>Welcome!</h4>
      <Map countyColors={someArray} width={'500px'} height={'500px'}
        selectedCounty={'41'} onCountySelect={handleCountySelect} />
      <HorizontalBarChart />
    </div>)
}

export default HomeView
