import { SELECT_QUESTION, RESET_QUESTION } from './actions';

export const reducer = (state, action) => {
  let question = {};

  switch (action.type) {
    case SELECT_QUESTION:
      return { ...state, ...action.payload.question };
    case RESET_QUESTION:
      return question;
    default:
      return state;
  }
};
