import { GET_TRANSACTONS, GET_ADDRESSES, GET_BONUSES, GET_REVIEWS, ADD_AN_ORDER_ITEM, REMOVE_AN_ORDER_ITEM, INCREMENT_ORDER_ITEM, DECREMENT_ORDER_ITEM, GET_HISTORY, REPEAT_ORDER, DELIVERY_SHOPPING_CARD, PICKUP_SHOPPING_CARD, GET_CURRENT_LOCATION, SET_PESISTED_STATE } from '../actions/types'
import { orders } from '../../../fakeOrders'
import { getStorage } from '../localStorage';

const initialState = {
  transactions: [],
  addresses: [],
  bonuses: [],
  reviews: [],
  orders,
  // ordersAmount: 498,
  ordersAmount: 0,
  history: [],
  deliveryShoppingCard: false,
  pickupShoppingCard: false,
  currentLocation: null
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TRANSACTONS:
      return { ...state, transactions: action.payload }

    case GET_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload }

    case GET_ADDRESSES:
      return { ...state, addresses: action.payload }

    case GET_BONUSES:
      return { ...state, bonuses: action.payload }

    case GET_REVIEWS:
      return { ...state, reviews: action.payload }

    case ADD_AN_ORDER_ITEM:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        ordersAmount: state.ordersAmount += +action.payload.price
      }

    case REMOVE_AN_ORDER_ITEM:
      let newOrdersAmount: number = state.ordersAmount;
      state.orders.forEach(o => {
        if (o.id === action.payload) {
          return newOrdersAmount = state.ordersAmount - +o.price;
        }
      })
      return {
        ...state,
        orders: state.orders.filter(o => +o.id != +action.payload),
        ordersAmount: newOrdersAmount
      }

    case INCREMENT_ORDER_ITEM:
      let incrementedOrders = state.orders;
      let incrementedOrdersAmount = state.ordersAmount;
      incrementedOrders.forEach(order => {
        if (order.id === action.payload) {
          incrementedOrdersAmount += +order.price;
          order.counter += 1;
        }
      });
      return {
        ...state,
        orders: incrementedOrders,
        ordersAmount: incrementedOrdersAmount
      };

    case DECREMENT_ORDER_ITEM:
      let decrementedOrders = state.orders;
      let decrementedOrdersAmount = state.ordersAmount;
      decrementedOrders.forEach(order => {
        if (order.id === action.payload) {
          decrementedOrdersAmount -= +order.price;
          order.counter -= 1;
        }
      });
      return {
        ...state,
        orders: decrementedOrders,
        ordersAmount: decrementedOrdersAmount
      };

    case GET_HISTORY:
      return { ...state, history: action.payload }

    case REPEAT_ORDER:
      // let repeatedOrders = [];
      // state.orders.forEach(order => )
      return { ...state }

    case PICKUP_SHOPPING_CARD:
      return { ...state, pickupShoppingCard: !state.pickupShoppingCard }

    case DELIVERY_SHOPPING_CARD:
      return { ...state, deliveryShoppingCard: !state.deliveryShoppingCard }

    case SET_PESISTED_STATE:
      const persistedState = getStorage();
      console.log('persistedState:', persistedState);

      return { ...state, orders: persistedState.orders, ordersAmount: persistedState.ordersAmount }

    default:
      return state;
  }
}