import {
  GET_DREAMS,
  ADD_DREAM,
  UPDATE_DREAM,
  REMOVE_DREAM,
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
    default:
      return state;
  }
}
