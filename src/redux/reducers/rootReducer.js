import { combineReducers } from "redux"
import { reducerPizza } from './reducerPizza'
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
  pizza: reducerPizza,
  user: userReducer
});

export default rootReducer;
