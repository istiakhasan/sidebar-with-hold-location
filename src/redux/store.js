import { applyMiddleware, combineReducers, createStore } from "redux";
import CounterReducers from "./reducers/counterReducers";
import authReducer from "./reducers/authentication";
import { composeWithDevTools } from "@redux-devtools/extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
const persistConfig = {
  key: "root",
  storage,
   blacklist: ['authReducer']
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ CounterReducers, authReducer })
);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

let persistor = persistStore(store);
export { store, persistor };
