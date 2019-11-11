import Router from 'next/router';
import { connect } from 'react-redux';
import { selectQuestion, updateQuestion } from '../redux/actions/actions';

const entities = require('entities');

// TODO: abstract away a table component
const QuestionsTable = props => {
  function handleClick(selectedQuestion) {
    props.selectQuestion(selectedQuestion);
    // It merges the category id into the object
    props.updateQuestion({ category_id: props.category });
    Router.push('/question');
  }

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
          {!props.questions.length ? (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          ) : (
            props.questions.map((item, index) => (
              <tr key={index}>
                <td>
                  <a
                    title="Discover more"
                    role="link"
                    tabIndex={0}
                    onClick={() => handleClick(item)}
                    onKeyPress={() => handleClick(item)}
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

export default connect(
  null,
  {
    selectQuestion,
    updateQuestion
  }
)(QuestionsTable);
