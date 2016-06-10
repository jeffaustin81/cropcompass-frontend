import { combineReducers } from 'redux'
//import {reducer as formReducer} from 'redux-form';

const countyName = (state = "", action) => {
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
        return action.payload
      default:
        return state
    }
}

const countyData = (state = "", action) => {
    switch(action.type) {
      case 'ADD_COUNTY_DATA':
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
        console.log('changing to leaf')
        return 'leaf'
      }
      else if(action.payload === 'leaf'){
        console.log('changing to apple')
        return 'apple'
      }
      else {
        console.log('changing to hazelnut')
        return 'hazelnut'
      }
      default:
        return state
    }
}

const CropCompassReducer = combineReducers({
  countyName, cropName, countyData, cropImageName, cycleFlag
})

export default CropCompassReducer
