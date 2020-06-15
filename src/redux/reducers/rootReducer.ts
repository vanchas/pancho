import { combineReducers } from "redux"
import { userReducer } from './userReducer'
import { reducerProducts } from "./reducerProducts";

const rootReducer = combineReducers({
  products: reducerProducts,
  user: userReducer
});

export default rootReducer;
