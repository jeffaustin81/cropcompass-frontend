import { combineReducers } from 'redux'
//import {reducer as formReducer} from 'redux-form';

const countyName = (state = {}, action) => {
    switch(action.type) {
      case 'SELECT_COUNTY':
        return action.payload
      default:
        return state
    }
}

const showJournalism = (state = false, action) => {
    switch(action.type) {
      case 'TOGGLE_JOURNALISM':
        return !state
      default:
        return state
    }
}

const cropName = (state = "", action) => {
    switch(action.type) {
      case 'SELECT_CROP':
        return action.payload
      default:
        return state
    }
}

const exportCrop = (state = "", action) => {
    switch(action.type) {
      case 'CHANGE_EXPORT_CROP':
        return action.payload
      default:
        return state
    }
}

const exportsHistory = (state = [], action) => {
    switch(action.type) {
      case 'POPULATE_EXPORTS':
        return action.payload
      default:
        return state
    }
}


const sortMapBy = (state = "", action) => {
    switch(action.type) {
      case 'SORT_MAP':
        return action.payload
      default:
        return state
    }
}

const countyData = (state = {subsidies: [], commoditiesByAcre: [], commoditiesByHarvestHistory: [], commoditiesByHarvestThisYear: []}, action) => {
    switch(action.type) {
      case 'ADD_COUNTY_COMMODITY_ACRE_DATA':
      return Object.assign({}, {
                  subsidies: state.subsidies,
                  commoditiesByAcre: action.payload,
                  commoditiesByHarvestHistory: state.commoditiesByHarvestHistory,
                  commoditiesByHarvestThisYear: state.commoditiesByHarvestThisYear,

              })
      case 'ADD_COUNTY_COMMODITY_HARVEST_DATA':
      return Object.assign({}, {
                  subsidies: state.subsidies,
                  commoditiesByAcre: state.commoditiesByAcre,
                  commoditiesByHarvestHistory: state.commoditiesByHarvestHistory,
                  commoditiesByHarvestThisYear: action.payload,
              })
      case 'ADD_COUNTY_COMMODITY_HARVEST_HISTORY':
      return Object.assign({}, {
                  subsidies: state.subsidies,
                  commoditiesByAcre: state.commoditiesByAcre,
                  commoditiesByHarvestHistory: action.payload,
                  commoditiesByHarvestThisYear: state.commoditiesByHarvestThisYear,
                      })

      case 'ADD_COUNTY_SUBSIDY_DATA':
      return Object.assign({}, {
                  subsidies: action.payload,
                  commoditiesByAcre: state.commoditiesByAcre,
                  commoditiesByHarvestHistory: state.commoditiesByHarvestHistory,
                  commoditiesByHarvestThisYear: state.commoditiesByHarvestThisYear,
              })

      default:
        return state
    }
}

const allPossibleCrops = (state = [], action) => {
    switch(action.type) {
      case 'FETCH_ALL_POSSIBLE_CROPS':
        return action.payload
      default:
        return state
    }
}

const selectedYear = (state = "", action) => {
    switch(action.type) {
      case 'CHANGE_YEAR':
        return action.payload
      default:
        return state
    }
}



const cropList = (state = [], action) => {
    switch(action.type) {
      case 'FETCH_CROPS_LIST':
        return action.payload
      default:
        return state
    }
}


const countyList = (state = [], action) => {
    switch(action.type) {
      case 'FETCH_COUNTY_LIST':
        return action.payload
      default:
        return state
    }
}


const diversityList = (state = [], action) => {
    switch(action.type) {
      case 'FETCH_DIVERSITY_LIST':
        return action.payload
      default:
        return state
    }
}

const cycleFlag = (state = "", action) => {
    switch(action.type) {
      case 'TOGGLE_CYCLE_FLAG':
        return !state
      default:
        return state
    }
}

const showHugeCropList = (state = false, action) => {
    switch(action.type) {
      case 'TOGGLE_HUGE_CROP_LIST':
        return !state
      default:
        return state
    }
}

const cropImageName = (state = "", action) => {
    switch(action.type) {
      case 'CHANGE_CROP_IMAGE':
      if(action.payload === 'hazelnut'){
        return 'leaf'
      }
      else if(action.payload === 'leaf'){
        return 'apple'
      }
      else {
        return 'hazelnut'
      }
      default:
        return state
    }
}


const showMenus = (state = {cropMenu: false, countyMenu: false}, action) => {
    switch(action.type) {
      case 'TOGGLE_SHOW_COUNTY_MENU':
        return {cropMenu: state.cropMenu, countyMenu: !state.countyMenu}
      case 'TOGGLE_SHOW_CROP_MENU':
        return {countyMenu: state.countyMenu, cropMenu: !state.cropMenu}
      case 'CLEAR_ALL_MENUS':
        return {cropMenu: false, countyMenu: false}
      default:
        return state
    }
}

const CropCompassReducer = combineReducers({
  countyName, countyList, cropName, countyData, cropImageName, allPossibleCrops, exportCrop, diversityList,
  cycleFlag, cropList, sortMapBy, showMenus, selectedYear, showJournalism, exportsHistory, showHugeCropList
})

export default CropCompassReducer
