import { GET_BILLS, ADD_BILL } from '../actions/types';

const initialState = {
  bills: null,
  loading: true,
  error: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BILLS:
      return {
        ...state,
        bills: payload,
        loading: false,
      };
    case ADD_BILL:
      return {
        ...state,
        bill: payload,
        loading: false,
      };
    default:
      return state;
  }
}
