import { GET_TRANSACTONS, GET_ADDRESSES, GET_BONUSES, GET_REVIEWS, ADD_AN_ORDER_ITEM, REMOVE_AN_ORDER_ITEM, INCREMENT_ORDER_ITEM, DECREMENT_ORDER_ITEM } from '../actions/types'
import { orders } from '../../../fakeOrders'

const initialState = {
  transactions: [],
  addresses: [],
  bonuses: [],
  reviews: [],
  orders,
  ordersAmount: 498
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_TRANSACTONS:
      return { ...state, transactions: action.payload }

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

    default:
      return state;
  }
}