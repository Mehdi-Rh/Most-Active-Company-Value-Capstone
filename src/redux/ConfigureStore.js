import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import stockReducer from './HomeSlice';

const store = configureStore({
  reducer: stockReducer,
  middleware: [thunk],
});

export default store;
