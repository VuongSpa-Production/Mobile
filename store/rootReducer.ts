import { combineReducers } from "@reduxjs/toolkit";
import { reducer as productReducer } from "./productSlice";
import {reducer as authReducer} from './authSlice';

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
});

export default rootReducer;