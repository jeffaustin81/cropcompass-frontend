import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import CuteButton from '../CuteButton/CuteButton'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import Words from '../Words/Words'

export const Subsidies = (props) => {


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
  let subsidyAmount = {
    color: "#fff",
    backgroundColor: "#523c03",
    borderRadius: "5px",
    display: "inline-block",
    padding: "5px"
  }
  let subsidyAmountDescription = {
    marginLeft: "20px",
    display: "inline-block",
    fontSize: "16px"
  }

    let subsidies = props.countyData.subsidies

    let justDollars = subsidies.map( (d,i) => {
      return d.subsidy_dollars
    })
    let subsidiesNumber = justDollars.reduce((a, b) => a + b, 0);


      let thisCountyLevels = props.countyList.filter( (d) => {
        return d.county === props.selectedCounty
      })
      let subsidyLevel = ""
      if(thisCountyLevels.length > 0) { subsidyLevel = thisCountyLevels[0].subsidyLevel}

    return (

        <div className="row" style={paddingBorders}>
          <div className="row">
            <h1>{props.selectedCounty} Subsidies in {props.selectedYear}</h1>
            <h4>Generally, crop subsidies are {subsidyLevel} here compared to other counties in Oregon.</h4>
          </div>
          <br/>
          <div className="col-md-12" style={infoRow}>
            <div className="col-md-8">

              <h2 style={subsidyAmount}>${subsidiesNumber}</h2><p style={subsidyAmountDescription}> in subsidies in {props.selectedYear}</p>


          <br/>
              <Words title="Why do subsidies matter?">
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
              </Words>
            </div>
            <div className="col-md-4">
              <HorizontalBarChart countyName={props.selectedCounty} countyData={subsidies} xMetric="subsidy_dollars" chartTitle={`Most subsidized crops in ${props.selectedCounty}`}/>
            </div>
            </div>
          </div>

    )
  }

export default Subsidies
