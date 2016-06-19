// import React from 'react'
// import { IndexLink, Link } from 'react-router'
// import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
// import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
// import LineChart from 'components/VisualizationsD3/LineChartD3/LineChart'
// import Words from '../Words/Words'
//
//
// export const CropProduction = (props) => {
//   let infoRow = {
//     background: "white",
//     borderRadius: "5px",
//     marginTop: "30px",
//     padding: "20px",
//     boxShadow: "1px 1px 25px -4px rgba(140,143,140,.5)",
//     transition: "boxShadow .4s ease-in-out"
//   }
//   let paddingBorders = {
//     borderBottom: "solid 1px #523c03",
//     paddingBottom: "50px",
//     paddingTop: "25px",
//     marginBottom: "20px"
//   }
//   let dataset = props.dataset || ""
//     return (
//       <div className="row" style={paddingBorders}>
//         <div className="row">
//         <h1>{props.selectedCounty} production of {props.selectedCrop.toLowerCase()} </h1>
//         { dataset.length > 0 ?
//         <h1>  between {dataset[dataset.length - 1]['year']} and {dataset[0]['year']}</h1>
//            :<h1> since 1976 </h1>}
//         </div>
//         <br/>
//         { dataset.length > 0 ?
//       <div className="col-md-12" style={infoRow}>
//             <div className="col-md-7">
//               <LineChartD3 selectedCounty={props.selectedCounty} xMetric="year" yMetric="harvested_acres" dataset={props.dataset} title={`${props.selectedCrop} production in ${props.selectedCounty} by year`} selectedCrop={props.selectedCrop} countyData={props.countyData}/>
//             </div>
//             <div className="col-md-5">
//               <Words title="Crop Production and Environment">
//               Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
//               </Words>
//             </div>
//         </div> : <h1>Since 1976, {props.selectedCounty} has had no recorded production of {props.selectedCrop.toLowerCase()}</h1>
//       }
//       </div>
//     )
//
//   }
//
//   export default CropProduction
import React from 'react'
import { IndexLink, Link } from 'react-router'
import HorizontalBarChart from 'components/VisualizationsD3/HorizontalBarChart/HorizontalBarChart'
import CuteButton from '../CuteButton/CuteButton'
import DonutD3 from 'components/VisualizationsD3/DonutD3/TryDonut'
import LineChartD3 from 'components/VisualizationsD3/LineChartD3/LineChartD3'
import Words from '../Words/Words'


export const CropProduction = (props) => {

  let thisCountyLevels = props.countyList.filter( (d) => {
    return d.county === props.selectedCounty
  })
  let productionLevel = ""
  if(thisCountyLevels.length > 0) { productionLevel = thisCountyLevels[0].cropProduction}
  let dataset = props.dataset || ""
    return (
      <div className="row text-center info-row">
        <div className="row">
        <CuteButton>
        <h1>{props.selectedCounty} production of {props.selectedCrop.toLowerCase()} </h1>
        { dataset.length > 0 ?
        <h1>  between {dataset[dataset.length - 1]['year']} and {dataset[0]['year']}</h1>
           :<h1> since 1976 </h1>}
        <h2>Generally, crop production is {productionLevel} here compared to other counties in Oregon.</h2>

        </CuteButton>
        </div>
        <br/>
        { dataset.length > 0 ?
        <div className="row">
            <div className="col-md-6">
              <LineChartD3 selectedCounty={props.selectedCounty} xMetric="year" yMetric="harvested_acres" dataset={props.dataset} title={`${props.selectedCrop} production in ${props.selectedCounty} by year`} selectedCrop={props.selectedCrop} countyData={props.countyData}/>
            </div>
            <div className="col-md-6">
              <Words title="Crop Production and Environment">
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
              </Words>
            </div>
        </div> : <h1>Since 1976, {props.selectedCounty} has had no recorded production of {props.selectedCrop.toLowerCase()}</h1>
      }
      </div>
    )
  }

  export default CropProduction
