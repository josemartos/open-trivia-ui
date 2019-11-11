import { SELECT_QUESTION, UPDATE_QUESTION } from '../actions/actions';

const initialState = {
  question: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_QUESTION:
    case UPDATE_QUESTION:
      return {
        question: {
          ...state.question,
          ...action.questionInfo
        }
      };

    default:
      return state;
  }
}

export default rootReducer;
