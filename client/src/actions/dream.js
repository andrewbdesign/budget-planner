import axios from 'axios';
import { GET_DREAMS, ADD_DREAM, UPDATE_DREAM, REMOVE_DREAM } from './types';
import { setAlert } from './alert';

export const getDreams = () => async dispatch => {
  try {
    const res = await axios.get('/api/dream');
    dispatch({
      type: GET_DREAMS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Can't find any dreams man"));
  }
};

export const addDream = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/dream', formData, config);

    dispatch({
      type: ADD_DREAM,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Can't add any dreams man"));
  }
};

export const updateDream = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`/api/dream/${formData.id}`, formData, config);
    dispatch({
      type: UPDATE_DREAM,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Can't update the dream man"));
  }
};

export const removeDream = dreamID => async dispatch => {
  try {
    const res = await axios.delete(`/api/dream/${dreamID}`);
    dispatch({
      type: REMOVE_DREAM,
      payload: res.data,
    });
  } catch (err) {
    setAlert('Cant remove the dream man');
  }
};
