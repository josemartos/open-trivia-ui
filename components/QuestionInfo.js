const entities = require('entities');

const QuestionInfo = ({ question }) => (
  <div className="question-info">
    {!question ? (
      ''
    ) : (
      <div>
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
      </div>
    )}
  </div>
);

export default QuestionInfo;
