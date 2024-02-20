import { rootReducer } from "./CombinedReducer";
import { createStore } from "redux";
import persistStore from "redux-persist/es/persistStore";
export const store=createStore(rootReducer)
export const persist=persistStore(store)