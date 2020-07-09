import React from 'react';
import { shallow } from 'enzyme';

import theme from 'src/theme';
import QuestionPage from './question.js';
import QuestionInfo from 'src/components/QuestionInfo';
import * as QuestionContext from 'src/context/QuestionContext';

beforeAll(() => {
  const contextValues = {
    selectedQuestion: {
      category: 'Entertainment: Board Games',
      type: 'multiple',
      difficulty: 'hard',
      question: 'What is the world&#039;s oldest board game?',
      correct_answer: 'Senet',
      incorrect_answers: ['Chess', 'Checkers', 'Go'],
      category_id: '16',
    },
  };

  jest
    .spyOn(QuestionContext, 'useQuestionContext')
    .mockImplementation(() => contextValues);
});

describe('QuestionsTable', () => {
  test('renders the QuestionPage', () => {
    const questionPage = shallow(<QuestionPage />);

    expect(questionPage.length).toEqual(1);
  });

  test('renders the QuestionInfo', () => {
    const questionPage = shallow(<QuestionPage theme={theme} />);
    const questionInfo = questionPage.find(QuestionInfo);

    expect(questionPage.length).toEqual(1);
    expect(questionInfo.length).toEqual(1);
  });
});
