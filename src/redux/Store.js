import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import counterReducer from './Reducer';
import Reducer2 from './Reducer2';
import Reduicer3 from './Reduicer3';
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit';

const persisConfig={
  key:"root",
  version:1,
  storage
};
const reducer=combineReducers({
  counter:counterReducer,
    countrr:Reducer2,
    CountApi:Reduicer3
})
const persistedReducer=persistReducer(persisConfig,reducer);


const store = configureStore({
  reducer: {
    // counter:counterReducer,
    // countrr:Reducer2,
    // CountApi:Reduicer3'
    reducer:persistedReducer
  },
  middleware: [thunk],
 
});

export default store;
