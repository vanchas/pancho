import {
  GET_TRANSACTONS,
  GET_ADDRESSES,
  GET_BONUSES,
  GET_REVIEWS,
  ADD_AN_ORDER_ITEM,
  REMOVE_AN_ORDER_ITEM,
  INCREMENT_ORDER_ITEM,
  DECREMENT_ORDER_ITEM,
  GET_HISTORY,
  DELIVERY_SHOPPING_CARD,
  PICKUP_SHOPPING_CARD,
  GET_CURRENT_LOCATION,
  SET_PESISTED_STATE,
  ADD_REVIEW
} from '../actions/types'
import { loadState } from '../localStorage';

const initialState = {
  transactions: null,
  addresses: null,
  bonuses: null,
  reviews: [],
  orders: [],
  ordersAmount: 0,
  history: null,
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

    case ADD_REVIEW:
      if (state.reviews) {
        return { ...state, reviews: [...state.reviews, action.payload] }
      }
      return { ...state, reviews: action.payload }

    case ADD_AN_ORDER_ITEM:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        ordersAmount: state.ordersAmount += +action.payload.price
      }

    case REMOVE_AN_ORDER_ITEM:
      let newOrdersAmount: number = state.ordersAmount;
      state.orders.forEach((o: any) => {
        if (o.id === action.payload) {
          return newOrdersAmount = state.ordersAmount - (+o.price * +o.counter);
        }
      })
      return {
        ...state,
        orders: state.orders.filter((o: any) => +o.id != +action.payload),
        ordersAmount: newOrdersAmount
      }

    case INCREMENT_ORDER_ITEM:
      let incrementedOrders = state.orders;
      let incrementedOrdersAmount = state.ordersAmount;
      incrementedOrders.forEach((order: any) => {
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
      decrementedOrders.forEach((order: any) => {
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

    case PICKUP_SHOPPING_CARD:
      return { ...state, pickupShoppingCard: !state.pickupShoppingCard }

    case DELIVERY_SHOPPING_CARD:
      return { ...state, deliveryShoppingCard: !state.deliveryShoppingCard }

    case SET_PESISTED_STATE:
      const persistedState = loadState();
      if (persistedState && persistedState.user) {
        return {
          ...state,
          orders: persistedState.user.orders,
          ordersAmount: persistedState.user.ordersAmount
        }
      }
      return state

    default:
      return state;
  }
}