import axios from 'axios';
import {
  GET_PROFILE,
  PROFILE_ERROR,
  CREATE_PROFILE,
  DELETE_ACCOUNT,
  CLEAR_PROFILE,
} from './types';
import { setAlert } from './alert';

export const clearProfile = () => async dispatch => {
  try {
    dispatch({
      type: CLEAR_PROFILE,
    });
  } catch (err) {
    dispatch(setAlert("Couldn't clear current profile"));
  }
};

export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createProfile = (
  formData,
  history,
  edit = false,
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/profile', formData, config);
    dispatch({
      type: CREATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));
    if (edit) {
      history.push('/profile');
    } else {
      history.push('/create-goal');
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteAccount = () => async dispatch => {
  if (
    window.confirm(
      'Are you SURE you want to delete account? This CANNOT be undone!',
    )
  ) {
    try {
      await axios.delete('/api/profile');

      dispatch({
        type: DELETE_ACCOUNT,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
