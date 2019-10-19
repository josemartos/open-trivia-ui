// TODO: abstract away a table component
const QuestionsTable = ({ questions }) => {
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
            questions.map((question, index) => (
              <tr key={index}>
                <td>
                  <a title="Discover more" role="link" tabIndex={0}>
                    {question.question}
                  </a>
                </td>
                <td>{question.category}</td>
                <td>{question.difficulty}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsTable;
