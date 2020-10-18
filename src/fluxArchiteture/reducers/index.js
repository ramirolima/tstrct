import { combineReducers } from 'redux'
import test from './test/test_reducer'
import general from './general/general_reducer'
export default combineReducers({
    test,
    general,
})