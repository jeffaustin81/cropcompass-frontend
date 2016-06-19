import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import Words from '../Words/Words'

export const FarmInfo = (props) => {
    let dataset = props.countyData.slice(2,4)
    let infoRow = {
      background: "white",
      borderRadius: "5px",
      marginTop: "30px",
      padding: "20px",
      boxShadow: "1px 1px 25px -4px rgba(140,143,140,.5)",
      transition: "boxShadow .4s ease-in-out"
    }
    let paddingBorders = {
      borderBottom: "solid 1px #523c03",
      paddingBottom: "50px",
      paddingTop: "25px",
      marginBottom: "20px"
    }
    return (
      <div className="row" style={paddingBorders}>
        <div className="row">
          <h1>{props.selectedCounty} County Farms</h1>
        </div>
          <div className="col-md-12" style={infoRow}>
            <Words title={`${props.selectedCounty} Agriculture`}>
            <p>
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
            </p>
            </Words>
          </div>
      </div>
    )
  }

export default FarmInfo
