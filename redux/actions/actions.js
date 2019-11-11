export const SELECT_QUESTION = 'SELECT_QUESTION';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';

export function selectQuestion(questionInfo) {
  return { type: SELECT_QUESTION, questionInfo };
}

export function updateQuestion(questionInfo) {
  return { type: UPDATE_QUESTION, questionInfo };
}
