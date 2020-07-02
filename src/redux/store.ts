import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { saveState, loadState } from './localStorage';
import { setPersistedState } from './actions/actions';
// import { getCurrentLocation } from './actions/actions';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  if (store.getState().user.ordersAmount > 0) {
    saveState({
      ordersAmount: store.getState().user.ordersAmount,
      orders: store.getState().user.orders
    });
  }
  console.log('updated state: ', store.getState());
});

store.dispatch(setPersistedState());
// store.dispatch(getCurrentLocation());

export default store;
