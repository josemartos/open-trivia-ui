import Head from 'next/head';
import Link from 'next/link';
import { connect } from 'react-redux';
import utils from '../utils';
import QuestionInfo from '../components/QuestionInfo';

const QuestionPage = props => {
  return (
    <section className="question-page">
      <Head>
        <title>Open Trivia UI - Question</title>
      </Head>
      <article>
        <div className="page-container">
          {utils.isEmptyObject(props.question) ? (
            <div>No question</div>
          ) : (
            <QuestionInfo question={props.question} />
          )}
          <Link href="/">
            <a title="Home page">back to the list</a>
          </Link>
        </div>
      </article>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    question: state.question
  };
};

export default connect(
  mapStateToProps,
  null
)(QuestionPage);
