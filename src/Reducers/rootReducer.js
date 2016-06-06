import { combineReducers } from 'redux'
//import {reducer as formReducer} from 'redux-form';

const countyName  = (state = "", action) => {
    switch(action.type) {
      case 'SELECT_COUNTY':
      console.log(action)
      return action.countyName
      default: return state
    }
}

const cropName  = (state = "", action) => {
    switch(action.type) {
      case 'SELECT_CROP':
      console.log(action)
      return action.cropName
      default: return state
    }
}



const CropCompassReducer = combineReducers({
  countyName, cropName
})

export default CropCompassReducer
