import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'
import FarmedLand from '../../components/FarmedLand'
import FarmInfo from '../../components/FarmInfo'
import TopCrops from '../../components/TopCrops'
import Subsidies from '../../components/Subsidies'
import CropProduction from '../../components/CropProduction'
import ImportExport from '../../components/ImportExport'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <FarmedLand />
    <FarmInfo />
    <TopCrops />
    <Subsidies />
    <CropProduction />
    <ImportExport/>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
