import { combineReducers } from "@reduxjs/toolkit";
import getTextSlice from "./getTextSlice";
import globalSlice from "./globalSlice";

const rootReducer = combineReducers({
    text: getTextSlice,
    global: globalSlice
})

export default rootReducer  