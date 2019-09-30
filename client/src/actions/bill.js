import axios from 'axios';
import { GET_BILLS, ADD_BILL } from './types';
import { setAlert } from './alert';

export const getBills = () => async dispatch => {
  try {
    const res = await axios.get('/api/bill');
    dispatch({
      type: GET_BILLS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Can't find any bills man"));
  }
};

export const addBill = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/bill', formData, config);
    dispatch({
      type: ADD_BILL,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert('cannot add bills man'));
  }
};
