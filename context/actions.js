export const SELECT_QUESTION = 'SELECT_QUESTION';
export const RESET_QUESTION = 'RESET_QUESTION';

export const selectQuestion = (question, categoryId) => ({
  type: SELECT_QUESTION,
  payload: { question, categoryId },
});

export const resetQuestion = () => ({
  type: RESET_QUESTION,
});
