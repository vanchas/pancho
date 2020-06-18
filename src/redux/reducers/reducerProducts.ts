import { GET_PIZZAS, SET_LEFT_HALF_PIZZA, SET_RIGHT_HALF_PIZZA, GET_WOKS, SHOW_DISCOUNTS, GET_SNACKS, GET_SOUCES, GET_DRINKS, GET_PASTAS, GET_COMBOS, GET_SETS, GET_DESSERTS } from '../actions/types'

const initialState = {
  pizza: [],
  leftHalfPizza: {},
  rightHalfPizza: {},
  wok: [],
  discounts: [],
  souces: [],
  drinks: [],
  snacks: [],
  pastas: [],
  combos: [],
  sets: [],
  desserts: []
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

    // discounts
    case SHOW_DISCOUNTS:
      return { ...state, discounts: action.payload }

    // snacks
    case GET_SNACKS:
      return { ...state, snacks: action.payload }

    // souces
    case GET_SOUCES:
      return { ...state, souces: action.payload }

    // drinks
    case GET_DRINKS:
      return { ...state, drinks: action.payload }

    // pastas
    case GET_PASTAS:
      return { ...state, pastas: action.payload }

    // combos
    case GET_COMBOS:
      return { ...state, combos: action.payload }

    // sets
    case GET_SETS:
      return { ...state, sets: action.payload }

    // desserts
    case GET_DESSERTS:
      return { ...state, desserts: action.payload }

    default:
      return state;
  }
}