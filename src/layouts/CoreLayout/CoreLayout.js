import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'
// import SideMenu from '../../components/SideMenu/SideMenu'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />

  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
