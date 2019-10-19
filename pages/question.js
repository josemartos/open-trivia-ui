import Head from 'next/head';
import Link from 'next/link';
import { useContext } from 'react';
import QuestionContext from '../context/QuestionContext';
import QuestionInfo from '../components/QuestionInfo';

const QuestionPage = () => {
  const [question] = useContext(QuestionContext);

  return (
    <section className="question-page">
      <Head>
        <title>Open Trivia UI - Question</title>
      </Head>
      <article>
        <div className="page-container">
          {!question.question ? (
            <div>No question</div>
          ) : (
            <QuestionInfo question={question} />
          )}
          <Link href="/">
            <a title="Home page">back to the list</a>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default QuestionPage;
