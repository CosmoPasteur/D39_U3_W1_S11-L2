import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";
import indexReducers from "../reducers/indexReducers";

const rootReducer = combineReducers({
  favorite: indexReducers,
});

const store = configureStore({
  // reducer: mainReducer,
  reducer: rootReducer,
});

export default store;
