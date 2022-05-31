import { combineReducers, configureStore } from '@reduxjs/toolkit';
import currencySlice from './reducers/currencySlice';

const rootReducer = combineReducers({
  currency: currencySlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
