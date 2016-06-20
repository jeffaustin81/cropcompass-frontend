import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import CuteButton from '../CuteButton/CuteButton'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import Words from '../Words/Words'

export const CropDiversity = (props) => {
  let thisCountyLevels = props.countyList.filter( (d) => {
    return d.county === props.selectedCounty
  })
  let diversityLevel = ""
  if(thisCountyLevels.length > 0) { diversityLevel = thisCountyLevels[0].cropDiversity}

  let thisCountyDiversity = ''
  let averageScore =''
  console.log(props.diversityList)
  if (props.diversityList.data !== undefined){
    thisCountyDiversity = props.diversityList.data[0][props.selectedCounty].toFixed(2)
    averageScore = props.diversityList.average_diversity_score.toFixed(2)
 }
    return (

        <div className="row text-center info-row">
          <div className="row">
          <CuteButton>
          <h1>Crop Diversity in {props.selectedCounty} in {props.selectedYear}</h1>
          <h2>Generally, crop diversity is {diversityLevel} here compared to other counties in Oregon.</h2>

          </CuteButton>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-4">
              <Words title="Why does diversity matter?">
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
              </Words>
            </div>
            <div className="col-md-8">
            {props.selectedCounty} has a diversity score of {thisCountyDiversity}
            <br/>
            The average diversity score is {averageScore}
            <br/>
            The county with the highest diversity score is Washinton County with a score of 3.54.
       </div>
          </div>
        </div>
    )
  }

export default CropDiversity
