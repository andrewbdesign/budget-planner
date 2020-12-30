import {
  GET_GOALS,
  ADD_GOAL,
  REMOVE_GOAL,
  UPDATE_GOAL,
  GET_GOAL,
  SET_GOAL_FOCUS,
  CLEAR_GOALS,
} from 'actions/types';

const initialState = {
  goals: [],
  loading: true,
  error: {},
  goal: null,
  goalFocus: 0,
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
    case GET_GOAL:
      return {
        ...state,
        goal: payload,
        loading: false,
      };
    case SET_GOAL_FOCUS:
      return {
        ...state,
        goalFocus: payload,
        loading: false,
      };
    case CLEAR_GOALS:
      return {
        ...state,
        goal: null,
        goals: [],
        goalFocus: 0,
        loading: false,
      }
    default:
      return state;
  }
}
