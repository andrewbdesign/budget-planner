import axios from 'axios';
import { GET_GOALS, ADD_GOAL, UPDATE_GOAL, REMOVE_GOAL } from './types';
import { setAlert } from './alert';

export const getGoals = () => async dispatch => {
  try {
    const res = await axios.get('/api/goal');
    dispatch({
      type: GET_GOALS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Can't find any goals man"));
  }
};

export const addGoal = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/goal', formData, config);

    dispatch({
      type: ADD_GOAL,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Can't add any goals man"));
  }
};

export const updateGoal = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.put(`/api/goal/${formData.id}`, formData, config);
    dispatch({
      type: UPDATE_GOAL,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Can't update the goal man"));
  }
};

export const removeGoal = goalID => async dispatch => {
  // console.log('billID', billID);
  try {
    const res = await axios.delete(`/api/goal/${goalID}`);
    dispatch({
      type: REMOVE_GOAL,
      payload: res.data,
    });
  } catch (err) {
    setAlert('Cant remove goal man');
  }
};
