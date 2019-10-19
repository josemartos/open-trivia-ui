import Link from 'next/link';
import { useContext } from 'react';
import QuestionContext from '../context/QuestionContext';
import QuestionInfo from '../components/QuestionInfo';

const QuestionPage = () => {
  const [question] = useContext(QuestionContext);

  return (
    <article className="question-page">
      <div className="page-container">
        {!question.question ? (
          'No question'
        ) : (
          <div>
            <QuestionInfo question={question} />
            <Link href="/">
              <a title="Home page">back to the list</a>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

export default QuestionPage;
