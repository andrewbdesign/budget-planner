import {
  GET_DREAMS,
  ADD_DREAM,
  UPDATE_DREAM,
  REMOVE_DREAM,
  CLEAR_DREAMS
} from '../actions/types';

const initialState = {
  dreams: [],
  loading: true,
  error: {},
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_DREAMS:
    case ADD_DREAM:
    case UPDATE_DREAM:
    case REMOVE_DREAM:
      return {
        ...state,
        dreams: payload,
        loading: false,
      };
    case CLEAR_DREAMS:
      return {
        ...state,
        dreams: null,
        loading: false
      }
    default:
      return state;
  }
}
