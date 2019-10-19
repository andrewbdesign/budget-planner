import {
  GET_EXPENSES,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  UPDATE_EXPENSE,
  GET_MONTH,
  INCREASE_MONTH,
  DECREASE_MONTH,
  GET_EXPENSES_BY_MONTH,
  GET_CURRENT_MONTH_EXPENSES,
} from '../actions/types';

const initialState = {
  expenses: null,
  loading: true,
  error: {},
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EXPENSES:
    case GET_EXPENSES_BY_MONTH:
      return {
        ...state,
        expenses: payload,
        loading: false,
      };
    case GET_CURRENT_MONTH_EXPENSES:
      return {
        ...state,
        currentMonthExpenses: payload,
        loading: false,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: payload,
        loading: false,
      };
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: payload,
        loading: false,
      };
    case UPDATE_EXPENSE:
      return {
        ...state,
        expenses: payload,
        loading: false,
      };
    case GET_MONTH:
    case INCREASE_MONTH:
    case DECREASE_MONTH:
      return {
        ...state,
        monthFocus: payload,
        loading: false,
      };
    default:
      return state;
  }
}
