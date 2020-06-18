import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { getPizzas } from './actions/actions';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.dispatch(getPizzas());

store.subscribe(() => {
  // console.log('updated state: ', store.getState());
});

export default store;
