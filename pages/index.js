import Head from 'next/head';
import { useEffect, useState, useContext } from 'react';
import Api from '../utils/Api';
import useDropdown from '../components/useDropdown';
import QuestionsTable from '../components/QuestionsTable';
import QuestionContext from '../context/QuestionContext';

const HomePage = () => {
  const [selectedQuestion, setSelectedQuestion] = useContext(QuestionContext);
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const selectedCategory = selectedQuestion ? selectedQuestion.category_id : '';
  const [category, CategoryDropdown] = useDropdown(
    'Category',
    selectedCategory,
    categories
  );

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
    if (!category || isNaN(category)) return;

    setQuestions([]);
    setSelectedQuestion({});

    Api.get('/api.php', {
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

export default HomePage;
