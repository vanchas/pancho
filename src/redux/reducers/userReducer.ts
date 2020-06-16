import { GET_TRANSACTONS, GET_ADDRESSES, GET_BONUSES, GET_REVIEWS } from '../actions/types'

const initialState = {
  transactions: [],
  addresses: [],
  bonuses: [],
  reviews: []
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

    default:
      return state;
  }
}