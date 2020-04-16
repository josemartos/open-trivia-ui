export const SELECT_QUESTION = 'SELECT_QUESTION';
export const RESET_QUESTION = 'RESET_QUESTION';

export const selectQuestion = (question) => ({
  type: SELECT_QUESTION,
  payload: { question },
});

export const resetQuestion = () => ({
  type: RESET_QUESTION,
});
