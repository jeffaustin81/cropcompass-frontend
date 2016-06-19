import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import CuteButton from '../CuteButton/CuteButton'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import Words from '../Words/Words'

export const Subsidies = (props) => {
    let subsidies = props.countyData.subsidies
    let justDollars = subsidies.map( (d,i) => {
      return d.subsidy_dollars
    })
    let subsidiesNumber = justDollars.reduce((a, b) => a + b, 0);
    return (

        <div className="row text-center info-row">
          <div className="row">
          <CuteButton>
          <h1>Subsidies in {props.selectedCounty} in {props.selectedYear}</h1>
          </CuteButton>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-4">
              <CuteButton>
              <h2>${subsidiesNumber}</h2><h3> in subsidies on {props.selectedYear}</h3>
              </CuteButton>
              <Words title="Why do subsidies matter?">
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
              </Words>
            </div>
            <div className="col-md-8">
              <HorizontalBarChart countyName={props.selectedCounty} countyData={subsidies} xMetric="subsidy_dollars" chartTitle={`Most subsidized crops in ${props.selectedCounty}`}/>
            </div>
          </div>
        </div>
    )
  }

export default Subsidies
