import Head from 'next/head';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import api from '../utils/api';
import utils from '../utils';
import useDropdown from '../components/useDropdown';
import QuestionsTable from '../components/QuestionsTable';

const HomePage = props => {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const selectedCategory = utils.isEmptyObject(props.question)
    ? ''
    : props.question.category_id;
  const [category, CategoryDropdown] = useDropdown(
    'Category',
    selectedCategory,
    categories
  );

  useEffect(() => {
    api
      .get('/api_category.php')
      .then(({ data }) => {
        const { trivia_categories } = data;
        setCategories(trivia_categories || []);
      })
      .catch(() => {
        // Handle error!
      });
  }, []);

  useEffect(() => {
    if (!category || isNaN(category)) return;

    setQuestions([]);

    api
      .get('/api.php', {
        params: {
          amount: 10,
          category
        }
      })
      .then(({ data }) => {
        const { results } = data;
        setQuestions(results || []);
      })
      .catch(() => {
        // Handle error!
      });
  }, [category]);

  return (
    <section className="home-page">
      <Head>
        <title>Open Trivia UI - Home</title>
      </Head>
      <article>
        <div className="page-container">
          <CategoryDropdown />
          {category && questions ? (
            <QuestionsTable category={category} questions={questions} />
          ) : (
            ''
          )}
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
)(HomePage);
