import {
  ERROR,
  TEMPLATE_CREATED,
  PUSH_TEMPLATE,
} from '../types';

const appReducer = (state, action) => {
  switch (action.type) {
    case ERROR:
      return{
        ...state,
        error: action.payload
      };
    case PUSH_TEMPLATE:
    case TEMPLATE_CREATED:
      return{
        ...state,
        templates: [...state.templates, action.payload]
      };
    default:
      return state;
  }
};

export default appReducer;