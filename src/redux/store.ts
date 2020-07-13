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
  saveState({
    user: {
      // transactions: store.getState().user.transactions,
      // addresses: store.getState().user.addresses,
      // bonuses: store.getState().user.bonuses,
      // reviews: store.getState().user.reviews,
      // history: store.getState().user.history,
      // deliveryShoppingCard: store.getState().user.deliveryShoppingCard,
      // pickupShoppingCard: store.getState().user.pickupShoppingCard,
      // currentLocation: store.getState().user.currentLocation,

      ordersAmount: store.getState().user.ordersAmount,
      orders: store.getState().user.orders
    }
  });
  console.log('updated state: ', store.getState());
});

store.dispatch(setPersistedState());
// store.dispatch(getCurrentLocation());

export default store;
