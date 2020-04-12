import Head from 'next/head';
import { useEffect, useState, useContext } from 'react';
import Api from '../utils/Api';
import useDropdown from '../components/useDropdown';
import QuestionsTable from '../components/QuestionsTable';
import { QuestionContext } from '../context/QuestionContext';
import { resetQuestion } from '../context/actions';

const HomePage = () => {
  const { selectedQuestion, dispatch } = useContext(QuestionContext);
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const selectedCategoryId = selectedQuestion
    ? selectedQuestion.category_id
    : '';
  const [categoryId, CategoryDropdown] = useDropdown(
    'Category',
    selectedCategoryId,
    categories
  );

  const resetQuestions = () => {
    setQuestions([]);
  };

  useEffect(() => {
    Api.get('/api_category.php')
      .then(({ data }) => {
        const { trivia_categories } = data;
        setCategories(trivia_categories || []);
      })
      .catch(() => {
        // Handle error!
      });
  }, []);

  useEffect(() => {
    if (!categoryId || isNaN(categoryId)) return;

    resetQuestions();
    dispatch(resetQuestion());

    Api.get('/api.php', {
      params: {
        amount: 10,
        category: categoryId,
      },
    })
      .then(({ data }) => {
        const { results } = data;
        setQuestions(results || []);
      })
      .catch(() => {
        // Handle error!
      });
  }, [categoryId]);

  return (
    <section className="home-page">
      <Head>
        <title>Open Trivia UI - Home</title>
      </Head>
      <article>
        <div className="page-container">
          <CategoryDropdown />
          {categoryId && questions && (
            <QuestionsTable categoryId={categoryId} questions={questions} />
          )}
        </div>
      </article>
    </section>
  );
};

export default HomePage;
