import { createContext } from 'react';

const QuestionContext = createContext([{ question: 'info' }, () => {}]);

export default QuestionContext;
