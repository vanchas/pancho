import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { saveState } from './localStorage';
import { setPersistedState } from './actions/actions';
// import { getCurrentLocation } from './actions/actions';

// const persistedState = loadState();

const store = createStore(
  rootReducer,
  // persistedState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState({
    user: {
      ...store.getState().user,
      ordersAmount: store.getState().user.ordersAmount,
      orders: store.getState().user.orders
    }
  });
  // console.log('updated state: ', store.getState());
  // console.log('local storage: ', persistedState);
});

store.dispatch(setPersistedState());
// store.dispatch(getCurrentLocation());

export default store;
