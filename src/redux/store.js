import { combineReducers, createStore } from "redux";
import CounterReducers from "./reducers/counterReducers";
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['CounterReducers']
  }
  const persistedReducer = persistReducer(persistConfig, combineReducers({CounterReducers}))
const store=createStore(persistedReducer,composeWithDevTools())

let persistor = persistStore(store)
export  {store,persistor}