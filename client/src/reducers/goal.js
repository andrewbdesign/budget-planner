import {
  GET_GOALS,
  ADD_GOAL,
  UPDATE_GOAL,
  REMOVE_GOAL,
} from '../actions/types';

const initialState = {
  goals: [],
  loading: true,
  error: {},
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_GOALS:
    case ADD_GOAL:
    case UPDATE_GOAL:
    case REMOVE_GOAL:
      return {
        ...state,
        goals: payload,
        loading: false,
      };
    default:
      return state;
  }
}
