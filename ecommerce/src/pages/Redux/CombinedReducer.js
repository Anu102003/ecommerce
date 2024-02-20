// import {combineReducers} from "redux"
// import { UserReducer } from "./Reducer"

// export const rootReducer=combineReducers({
//     user:UserReducer
// })
import {combineReducers} from "redux"
import { UserReducer } from "./Reducer"
import persistReducer from "redux-persist/es/persistReducer"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
  };

export const rootReducer = combineReducers({
    user: persistReducer(persistConfig, UserReducer)
});