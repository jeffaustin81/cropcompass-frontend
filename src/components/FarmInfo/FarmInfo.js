import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import CuteButton from '../CuteButton/CuteButton'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import Words from '../Words/Words'

export const FarmInfo = (props) => {
    let dataset = props.countyData.slice(2,4)
    return (
      <div className="row text-center info-row">
        <div className="row">
          <CuteButton>
          <h1>{props.selectedCounty} Farms</h1>
          </CuteButton>
        </div>
        <br/>
        <div className="row">
            <div className="col-md-6">
              <Words title="Oregon Agriculture">
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
              </Words>
            </div>
            <div className="col-md-6">
              <DonutD3 dataset={dataset} width="400" height="200"/>
            </div>
          </div>
      </div>
    )
  }

export default FarmInfo
