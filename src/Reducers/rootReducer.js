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

const CropCompassReducer = combineReducers({
  countyName, cropName, countyData
})

export default CropCompassReducer
