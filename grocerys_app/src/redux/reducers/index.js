import {combineReducers} from "redux";

import {cartListReducer} from "../reducers/cartListReducer"
import {footerReducer} from "../reducers/footerReducer"

export default combineReducers({
    cartListReducer,footerReducer
})