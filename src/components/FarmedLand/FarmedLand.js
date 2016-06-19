import React from 'react'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import { IndexLink, Link } from 'react-router'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import Words from '../Words/Words'

export const FarmedLand = (props) => {
  let dataset = props.countyData.slice(2,4)

  let mainStyle = {
    marginTop: "50px",
    borderTop: "solid 1px #523c03",
    borderBottom: "solid 1px #523c03",
    paddingTop: "50px",
    paddingBottom: "50px"
  }
    return (
      <div style={mainStyle} className="row">
        <div className="row">
        <h1>Oregon Farmed Land</h1>
        </div>
        <br/>
          <div className="row">
            <div className="col-md-6">
              <DonutD3 dataset={dataset} width="400" height="200"/>
            </div>
            <div className="col-md-6">
              <DonutD3 dataset={dataset} width="400" height="200"/>
            </div>
          </div>

        <div className="row">
          <div className="col-md-12">
            <Words title="Land Farmed in Oregon">
            Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
            </Words>
          </div>

        </div>

      </div>
    )
  }

export default FarmedLand
