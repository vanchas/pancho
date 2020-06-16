import { GET_PIZZAS, SET_LEFT_HALF_PIZZA, SET_RIGHT_HALF_PIZZA, GET_TRANSACTONS, GET_ADDRESSES, GET_BONUSES, GET_WOKS, SHOW_DISCOUNTS, ADD_REVIEW, GET_REVIEWS } from "./types"
import { pizza } from '../../../fakePizzas'
import { woks } from '../../../fakeWoks'
import { discounts } from '../../../fakeDiscounts'
import { reviews } from '../../../fakeReviews'

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

// wok
export const getWoks = () => {
  return { type: GET_WOKS, payload: woks }
}

// stocks
export const showDiscounts = () => {
  return { type: SHOW_DISCOUNTS, payload: discounts }
}
