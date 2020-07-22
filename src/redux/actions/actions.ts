import fetch from 'isomorphic-unfetch'
import { GET_PIZZAS, SET_LEFT_HALF_PIZZA, SET_RIGHT_HALF_PIZZA, GET_ADDRESSES, GET_BONUSES, GET_WOKS, SHOW_DISCOUNTS, ADD_REVIEW, GET_REVIEWS, GET_SNACKS, GET_SOUCES, GET_DRINKS, GET_PASTAS, GET_COMBOS, GET_SETS, GET_DESSERTS, ADD_AN_ORDER_ITEM, REMOVE_AN_ORDER_ITEM, INCREMENT_ORDER_ITEM, DECREMENT_ORDER_ITEM, GET_HISTORY, REPEAT_ORDER, DELIVERY_SHOPPING_CARD, PICKUP_SHOPPING_CARD, GET_CURRENT_LOCATION, SET_PESISTED_STATE, GET_SALADS } from "./types"
import { pizza } from '../../../fakePizzas'
import { woks } from '../../../fakeWoks'
import { discounts } from '../../../fakeDiscounts'
import { reviews } from '../../../fakeReviews'
import { snacks } from '../../../fakeSnacks'
import { souces, drinks, history } from "../../../fakeOrders"
import { pastas } from "../../../fakePastas"
import { combos } from "../../../fakeCombos"
import { sets } from "../../../fakeSets"
import { desserts } from "../../../fakeDesserts"
import { salads } from "../../../fakeSalads"

// === PRODUCTS ===
export const getPizzas = () => {
  return { type: GET_PIZZAS, payload: pizza }
}
export const setLeftHalfPizza = (pizza: any) => {
  return { type: SET_LEFT_HALF_PIZZA, payload: pizza }
}
export const setRightHalfPizza = (pizza: any) => {
  return { type: SET_RIGHT_HALF_PIZZA, payload: pizza }
}
export const getWoks = () => {
  return { type: GET_WOKS, payload: woks }
}
export const getCombos = () => {
  return { type: GET_COMBOS, payload: combos }
}
export const getSalads = () => {
  return { type: GET_SALADS, payload: salads }
}
export const getPastas = () => {
  return { type: GET_PASTAS, payload: pastas }
}
export const showDiscounts = () => {
  return { type: SHOW_DISCOUNTS, payload: discounts }
}
export const getSnacks = () => {
  return { type: GET_SNACKS, payload: snacks }
}
export const getSouces = () => {
  return { type: GET_SOUCES, payload: souces }
}
export const getDrinks = () => {
  return { type: GET_DRINKS, payload: drinks }
}
export const getSets = () => {
  return { type: GET_SETS, payload: sets }
}
export const getDesserts = () => {
  return { type: GET_DESSERTS, payload: desserts }
}


// user
// export const getOrders = (id: number) => {
//   const orders = [
//     { date: '20.20.20', time: '12:12', id: 15021, items: [{ name: 'Маргарита', size: 30, number: 1 }, { name: 'Пепперони', size: null, number: 2 }, { name: 'Чизболы', size: null, number: 1 }], address: 'г.Славянск, ул. Шевченко, 12, под.5, кв. 11', phone: '050-124-11-22', amount: 1312 },
//     { date: '10.10.10', time: '12:12', id: 15021, items: [{ name: 'Пепперони', size: null, number: 2 }, { name: 'Чизболы', size: null, number: 1 }], address: 'г.Славянск, ул. Шевченко, 12, под.5, кв. 11', phone: '050-124-11-22', amount: 1312 }
//   ];
//   return { type: GET_ORDERS, payload: orders }
// }
export const getAddress = (id: number) => {
  const address = [
    { city: 'Славянск', street: 'Василевского', house: '99', corpus: '10' },
    { city: 'Славянск', street: 'Шевченко', house: '3', corpus: '99', flat: '39' }
  ];
  return { type: GET_ADDRESSES, payload: address }
}
export const getBonuses = (id: number) => {
  const bonuses = [
    { date: '20.20.20', amount: 12.52 },
    { date: '10.10.10', amount: 6.33 },
    { date: '05.05.05', amount: 18.46 }
  ];
  return { type: GET_BONUSES, payload: bonuses }
}
export const addReview = (review: any) => {
  return { type: ADD_REVIEW, payload: review }
}
export const getReviews = () => {
  return { type: GET_REVIEWS, payload: reviews }
}
export const addAnOrderItem = (orderItem: any) => {
  return { type: ADD_AN_ORDER_ITEM, payload: { ...orderItem, orderId: Date.now(), counter: 1 } };
}
export const removeAnOrderItem = (id: number) => {
  return { type: REMOVE_AN_ORDER_ITEM, payload: id };
}
export const incrementOrderItem = (id: number) => {
  return { type: INCREMENT_ORDER_ITEM, payload: id };
}
export const decrementOrderItem = (id: number) => {

  return { type: DECREMENT_ORDER_ITEM, payload: id };
}
export const getHistory = () => {
  return { type: GET_HISTORY, payload: history };
}
export const repeatOrder = (id: number) => async (dispatch: Function) => {
    dispatch({ type: REPEAT_ORDER, payload: id })
}
export const openDeliveryShoppingCard = () => {
  return { type: DELIVERY_SHOPPING_CARD };
}
export const openPickupShoppingCard = () => {
  return { type: PICKUP_SHOPPING_CARD };
}

// app
export const getCurrentLocation = () => async (dispatch: Function) => {
  return await fetch(`https://api.2ip.ua/geo.json?ip=`)
    .then(res => res.json())
    .then(data => {
      if (data.city_rus.toLowerCase() === 'славянск') {
        dispatch({ type: GET_CURRENT_LOCATION, payload: data.city_rus })
      } else if (data.city_rus.toLowerCase() === 'краматорск') {
        dispatch({ type: GET_CURRENT_LOCATION, payload: data.city_rus })
      } else if (data.city_rus.toLowerCase() === 'бахмут') {
        dispatch({ type: GET_CURRENT_LOCATION, payload: data.city_rus })
      }
    }).catch(err => console.error('Error: ', err));
}

export const setPersistedState = () => async (dispatch: Function) => {
  return await dispatch({ type: SET_PESISTED_STATE });
}