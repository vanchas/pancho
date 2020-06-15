import { GET_PIZZAS, SET_LEFT_HALF_PIZZA, SET_RIGHT_HALF_PIZZA, GET_WOKS } from '../actions/types'

const initialState = {
  pizza: [],
  leftHalfPizza: {},
  rightHalfPizza: {},
  wok: []
};

export const reducerProducts = (state = initialState, action: any) => {
  switch (action.type) {
    // pizza
    case GET_PIZZAS:
      return { ...state, pizza: action.payload }
    case SET_LEFT_HALF_PIZZA:
      return { ...state, leftHalfPizza: action.payload }
    case SET_RIGHT_HALF_PIZZA:
      return { ...state, rightHalfPizza: action.payload }

    // wok
    case GET_WOKS:
      return { ...state, wok: action.payload }

    default:
      return state;
  }
}