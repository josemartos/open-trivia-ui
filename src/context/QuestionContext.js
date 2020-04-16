import React, { useReducer, createContext } from 'react';
import { reducer } from './reducer';

export const QuestionContext = createContext();

const QuestionProvider = ({ children }) => {
  const [selectedQuestion, dispatch] = useReducer(reducer, null);

  return (
    <QuestionContext.Provider value={{ selectedQuestion, dispatch }}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
