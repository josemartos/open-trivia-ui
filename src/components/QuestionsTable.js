import React, { useContext } from 'react';
import Router from 'next/router';
import { QuestionContext } from '../context/QuestionContext';
import { selectQuestion } from '../context/actions';

const entities = require('entities');

// TODO: abstract away a table component
const QuestionsTable = ({ categoryId, questions }) => {
  const { dispatch } = useContext(QuestionContext);

  const handleClick = (question) => () => {
    // It shallow merges the category id in the question object
    const newQuestion = {
      ...question,
      ...{ category_id: categoryId },
    };

    dispatch(selectQuestion(newQuestion));
    Router.push('/question');
  };

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Category</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {!questions.length ? (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          ) : (
            questions.map((item, index) => (
              <tr key={index}>
                <td>
                  <a
                    title="Discover more"
                    role="link"
                    tabIndex={0}
                    onClick={handleClick(item)}
                    onKeyPress={handleClick(item)}
                  >
                    {entities.decodeHTML(item.question)}
                  </a>
                </td>
                <td>{entities.decodeHTML(item.category)}</td>
                <td>{entities.decodeHTML(item.difficulty)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsTable;
