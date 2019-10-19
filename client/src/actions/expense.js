import axios from 'axios';
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
} from './types';
import { setAlert } from './alert';
import moment from 'moment';

export const getExpenses = () => async dispatch => {
  try {
    const res = await axios.get('/api/expense');
    dispatch({
      type: GET_EXPENSES,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Can't find any expenses man"));
  }
};

export const getExpensesByCurrentMonth = monthData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/expense/month', monthData, config);
    dispatch({
      type: GET_CURRENT_MONTH_EXPENSES,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Can't find any expenses man"));
  }
};
export const getExpensesByMonth = monthData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/expense/month', monthData, config);
    dispatch({
      type: GET_EXPENSES_BY_MONTH,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Can't find any expenses man"));
  }
};

export const addExpense = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/expense', formData, config);
    dispatch({
      type: ADD_EXPENSE,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert('cannot add expenses man'));
  }
};

export const removeExpense = expenseID => async dispatch => {
  try {
    const res = await axios.delete(`/api/expense/${expenseID}`);
    dispatch({
      type: REMOVE_EXPENSE,
      payload: res.data,
    });
  } catch (err) {
    setAlert('Cant remove expense man');
  }
};

export const updateExpense = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(
      `/api/expense/${formData.id}`,
      formData,
      config,
    );
    dispatch({
      type: UPDATE_EXPENSE,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert('Cant remove expense man'));
  }
};

export const getMonth = () => dispatch => {
  dispatch({
    type: GET_MONTH,
    payload: moment(),
  });
};

export const increaseMonth = updatedMonth => dispatch => {
  dispatch({
    type: INCREASE_MONTH,
    payload: updatedMonth,
  });
};

export const decreaseMonth = updatedMonth => dispatch => {
  dispatch({
    type: DECREASE_MONTH,
    payload: updatedMonth,
  });
};
