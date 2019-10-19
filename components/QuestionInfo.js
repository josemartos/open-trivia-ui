const QuestionInfo = ({ question }) => (
  <div className="question">
    {!question ? (
      ''
    ) : (
      <div>
        <h2>{question.question}</h2>
        <h3>{question.category}</h3>
        <ul>
          {question.incorrect_answers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
          <li className="question-correct">{question.correct_answer}</li>
        </ul>
      </div>
    )}
  </div>
);

export default QuestionInfo;
