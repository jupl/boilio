import {combineReducers} from 'redux'
import color from '../color/reducer'
import routes from '../routes/reducer'

/** Combination of reducer subsets as a single reducer for Redux */
export default combineReducers({color, routes})