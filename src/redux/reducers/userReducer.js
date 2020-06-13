import { GET_TRANSACTONS, GET_ADDRESSES, GET_BONUSES } from '../actions/types.js'

const initialState = {
  transactions: [],
  addresses: [],
  bonuses: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTONS:
      return { ...state, transactions: action.payload }

    case GET_ADDRESSES:
      return { ...state, addresses: action.payload }

    case GET_BONUSES:
      return { ...state, bonuses: action.payload }

    default:
      return state;
  }
}