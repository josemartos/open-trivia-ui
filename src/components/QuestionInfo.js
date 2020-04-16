import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';

const QuestionInfoWrapper = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.grey400};
    font-size: ${({ theme }) => theme.fontSizes.s20};
  }

  h3 {
    color: ${({ theme }) => theme.colors.grey300};
    font-size: ${({ theme }) => theme.fontSizes.s14};
  }

  ul > li {
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSizes.s16};
  }

  .question-correct {
    color: ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => rgba(theme.colors.green, 0.2)};
  }
`;

const entities = require('entities');

const QuestionInfo = ({ question }) => (
  <QuestionInfoWrapper>
    {question && (
      <>
        <h2>{entities.decodeHTML(question.question)}</h2>
        <h3>{entities.decodeHTML(question.category)}</h3>
        <ul>
          {question.incorrect_answers.map((answer, index) => (
            <li key={index}>{entities.decodeHTML(answer)}</li>
          ))}
          <li className="question-correct">
            {entities.decodeHTML(question.correct_answer)}
          </li>
        </ul>
      </>
    )}
  </QuestionInfoWrapper>
);

export default QuestionInfo;
