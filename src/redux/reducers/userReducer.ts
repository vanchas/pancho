import {
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
  ADD_REVIEW,
  REPEAT_ORDER,
  SET_HEADER_PHONE,
  INCREASE_FREE_SOUCES_COUNTER,
  DECREASE_FREE_SOUCES_COUNTER,
  SET_CURRENT_CITY, SET_CAFE_ADDRESS, SHOW_SUCCESS, SHOW_FAILURE, HIDE_SUCCESS, HIDE_FAILURE
} from "../actions/types";
import { loadState } from '../localStorage';

interface IState {
  addresses: any,
  bonuses: any,
  reviews: any[],
  orders: any[],
  ordersAmount: number,
  history: any[],
  deliveryShoppingCard: boolean,
  pickupShoppingCard: boolean,
  currentLocation: string,
  headerSelectPhone: string,
  freeSoucesCounter: number,
  cafeAddress: string,
  showSuccess: any,
  showFailure: string | null
}

const initialState: IState = {
  addresses: null,
  bonuses: null,
  reviews: [],
  orders: [],
  ordersAmount: 0,
  history: [],
  deliveryShoppingCard: false,
  pickupShoppingCard: false,
  currentLocation: 'Славянск',
  headerSelectPhone: '095-000-11-95',
  freeSoucesCounter: 0,
  cafeAddress: 'Славянск, ул. Шевченко,10',
  showSuccess: null,
  showFailure: null
}

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case SHOW_SUCCESS:
      return {...state, showSuccess: action.payload}

    case SHOW_FAILURE:
      return {...state, showFailure: action.payload}

    case HIDE_SUCCESS:
      return {...state, showSuccess: null}

    case HIDE_FAILURE:
      return {...state, showFailure: null}

    case REPEAT_ORDER:
      let repeatOrders: any[] = []
      let repeatOrdersAmount: number = state.ordersAmount
      let historyAfterRepeat: any[] = state.history

      if (state.history.length) {
        state.history.map((item: any) => {
          if (item.id === action.payload) {
            repeatOrdersAmount += item.amount
            historyAfterRepeat.push(item)
            return repeatOrders = [...state.orders, ...item.items]
          }
        })
      }
      return {
        ...state,
        orders: repeatOrders,
        ordersAmount: repeatOrdersAmount,
        history: historyAfterRepeat
      }

    case GET_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload }

    case SET_CURRENT_CITY:
      return { ...state, currentLocation: action.payload }

    case SET_CAFE_ADDRESS:
      return { ...state, cafeAddress: action.payload }

    case INCREASE_FREE_SOUCES_COUNTER:
      return { ...state, freeSoucesCounter: state.freeSoucesCounter + action.payload }

    case DECREASE_FREE_SOUCES_COUNTER:
      if (state.freeSoucesCounter > 0) {
        return { ...state, freeSoucesCounter: state.freeSoucesCounter - 1 }
      }
      return { ...state, freeSoucesCounter: 0 }

    case SET_HEADER_PHONE:
      return { ...state, headerSelectPhone: action.payload }

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
        if (o.orderId === action.payload) {
          return newOrdersAmount = state.ordersAmount - (+o.price * +o.counter);
        }
      })
      return {
        ...state,
        orders: state.orders.filter((o: any) => +o.orderId != +action.payload),
        ordersAmount: newOrdersAmount >= 0 ? newOrdersAmount : 0
      }

    case INCREMENT_ORDER_ITEM:
      let incrementedOrders = state.orders;
      let incrementedOrdersAmount = state.ordersAmount;
      incrementedOrders.forEach((order: any) => {
        if (order.orderId === action.payload) {
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
        if (order.orderId === action.payload) {
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
