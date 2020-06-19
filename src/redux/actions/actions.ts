import { GET_PIZZAS, SET_LEFT_HALF_PIZZA, SET_RIGHT_HALF_PIZZA, GET_TRANSACTONS, GET_ADDRESSES, GET_BONUSES, GET_WOKS, SHOW_DISCOUNTS, ADD_REVIEW, GET_REVIEWS, SIGNIN, GET_SNACKS, GET_SOUCES, GET_DRINKS, GET_PASTAS, GET_COMBOS, GET_SETS, GET_DESSERTS, MAKE_AN_ORDER, ADD_AN_ORDER_ITEM, REMOVE_AN_ORDER_ITEM, INCREMENT_ORDER_ITEM, DECREMENT_ORDER_ITEM } from "./types"
import { pizza } from '../../../fakePizzas'
import { woks } from '../../../fakeWoks'
import { discounts } from '../../../fakeDiscounts'
import { reviews } from '../../../fakeReviews'
import { snacks } from '../../../fakeSnacks'
import { souces, drinks } from "../../../fakeOrders"
import { pastas } from "../../../fakePastas"
import { combos } from "../../../fakeCombos"
import { sets } from "../../../fakeSets"
import { desserts } from "../../../fakeDesserts"

// === PRODUCTS ===
// pizza
export const getPizzas = () => {
  return { type: GET_PIZZAS, payload: pizza }
}
export const setLeftHalfPizza = (pizza: any) => {
  return { type: SET_LEFT_HALF_PIZZA, payload: pizza }
}
export const setRightHalfPizza = (pizza: any) => {
  return { type: SET_RIGHT_HALF_PIZZA, payload: pizza }
}
// wok
export const getWoks = () => {
  return { type: GET_WOKS, payload: woks }
}
// combos
export const getCombos = () => {
  return { type: GET_COMBOS, payload: combos }
}
// pastas
export const getPastas = () => {
  return { type: GET_PASTAS, payload: pastas }
}
// stocks
export const showDiscounts = () => {
  return { type: SHOW_DISCOUNTS, payload: discounts }
}
// snacks
export const getSnacks = () => {
  return { type: GET_SNACKS, payload: snacks }
}
// souces
export const getSouces = () => {
  return { type: GET_SOUCES, payload: souces }
}
// drinks
export const getDrinks = () => {
  return { type: GET_DRINKS, payload: drinks }
}
// sets
export const getSets = () => {
  return { type: GET_SETS, payload: sets }
}
// deserts
export const getDesserts = () => {
  return { type: GET_DESSERTS, payload: desserts }
}


// user
export const getTransactions = (id: number) => {
  const transactions = [
    { date: '20.20.20', time: '12:12', id: 15021, items: [{ name: 'Маргарита', size: 30, number: 1 }, { name: 'Пепперони', size: null, number: 2 }, { name: 'Чизболы', size: null, number: 1 }], address: 'г.Славянск, ул. Шевченко, 12, под.5, кв. 11', phone: '050-124-11-22', amount: 1312 },
    { date: '10.10.10', time: '12:12', id: 15021, items: [{ name: 'Пепперони', size: null, number: 2 }, { name: 'Чизболы', size: null, number: 1 }], address: 'г.Славянск, ул. Шевченко, 12, под.5, кв. 11', phone: '050-124-11-22', amount: 1312 }
  ];
  return { type: GET_TRANSACTONS, payload: transactions }
}
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
export const signIn = () => {
  return { type: SIGNIN }
}
export const makeAnOrder = () => {
  return { type: MAKE_AN_ORDER, payload: 'order' }
}
export const addAnOrderItem = (orderItem: any) => {
  return { type: ADD_AN_ORDER_ITEM, payload: { ...orderItem, id: Date.now(), counter: 1 } };
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
