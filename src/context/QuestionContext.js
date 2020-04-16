import React, { useReducer, createContext, useContext } from 'react';
import { reducer } from './reducer';

export const QuestionContext = createContext();
export const useQuestionContext = () => useContext(QuestionContext);

const QuestionProvider = ({ children }) => {
  const [selectedQuestion, dispatch] = useReducer(reducer, null);

  return (
    <QuestionContext.Provider value={{ selectedQuestion, dispatch }}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
