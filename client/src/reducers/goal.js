import {
  GET_GOALS,
  ADD_GOAL,
  REMOVE_GOAL,
  UPDATE_GOAL,
} from '../actions/types';

const initialState = {
  goals: null,
  loading: true,
  error: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_GOALS:
    case ADD_GOAL:
    case REMOVE_GOAL:
    case UPDATE_GOAL:
      return {
        ...state,
        goals: payload,
        loading: false,
      };
    default:
      return state;
  }
}
