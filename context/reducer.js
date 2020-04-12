import { SELECT_QUESTION, RESET_QUESTION } from './actions';

export const reducer = (state, action) => {
  let question = {};

  switch (action.type) {
    case SELECT_QUESTION:
      // It shallow merges the category id in the question object
      question = {
        ...action.payload.question,
        ...{ category_id: action.payload.categoryId },
      };

      return { ...state, ...question };
    case RESET_QUESTION:
      return question;
    default:
      return state;
  }
};
