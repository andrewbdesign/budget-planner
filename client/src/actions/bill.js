import axios from 'axios';
import { GET_BILLS, ADD_BILL, REMOVE_BILL, UPDATE_BILL } from './types';
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
    console.log('res', res);
    dispatch({
      type: ADD_BILL,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert('cannot add bills man'));
  }
};

export const removeBill = billID => async dispatch => {
  try {
    const res = await axios.delete(`/api/bill/${billID}`);
    dispatch({
      type: REMOVE_BILL,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert('Cant remove bill man'));
  }
};

export const updateBill = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`/api/bill/${formData.id}`, formData, config);
    dispatch({
      type: UPDATE_BILL,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert('Cant remove bill man'));
  }
};
