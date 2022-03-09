import React, { useReducer } from 'react';
import axios from 'axios';

import AppContext from './appContext';
import AppReducer from './appReducer';
import {
  ERROR,
  TEMPLATE_CREATED,
  PUSH_TEMPLATE,
} from '../types';

const AppState = props => {

  const initialState = {
    error: null,
    templates: []
  };

  // eslint-disable-next-line
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Create a template and add it to current users templates
  const createTemplate = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/templates', formData, config);
      console.log(res);
      const tempId = res.data._id;
      await axios.put('/api/users/'+tempId)

      dispatch({
        type: TEMPLATE_CREATED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.data.msg
      });
    }
  };

  // updates the current list of templates
  const pushTemplate = async (templateId) => {
    try {
      const res = await axios.get('/api/templates/'+templateId);
      console.log(res);

      dispatch({
        type: PUSH_TEMPLATE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.response.data.msg
      });
    }

  }
  
  return (
    <AppContext.Provider
      value={{
        error: state.error,
        templates: state.templates,
        createTemplate,
        pushTemplate
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState;