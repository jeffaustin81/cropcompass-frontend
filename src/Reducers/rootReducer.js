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

const cropName = (state = "", action) => {
    switch(action.type) {
      case 'SELECT_CROP':
      console.log(action)
        return action.payload
      default:
        return state
    }
}

const countyData = (state = [], action) => {
    switch(action.type) {
      case 'ADD_COUNTY_DATA':
        return action.payload
      default:
        return state
    }
}

const cropData = (state = [], action) => {
    switch(action.type) {
      case 'ADD_CROP_DATA':
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

const cycleFlag = (state = "", action) => {
    switch(action.type) {
      case 'TOGGLE_CYCLE_FLAG':
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
  countyName, cropName, countyData, cropImageName,
  cycleFlag, cropList, cropData, showMenus
})

export default CropCompassReducer
