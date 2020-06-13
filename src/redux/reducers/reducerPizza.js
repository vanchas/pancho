import { GET_PIZZAS, SET_LEFT_HALF_PIZZA, SET_RIGHT_HALF_PIZZA } from '../actions/types.js'

const initialState = {
  pizza: [],
  leftHalfPizza: {},
  rightHalfPizza: {},
  wok: []
};

export const reducerPizza = (state = initialState, action) => {
  switch (action.type) {
    case GET_PIZZAS:
      return { ...state, pizza: action.payload }

    case SET_LEFT_HALF_PIZZA:
      return { ...state, leftHalfPizza: action.payload }

    case SET_RIGHT_HALF_PIZZA:
      return { ...state, rightHalfPizza: action.payload }

    default:
      return state;
  }
}