import Head from 'next/head';
import { useEffect, useState } from 'react';
import Api from '../utils/Api';
import useDropdown from '../components/useDropdown';
import QuestionsTable from '../components/QuestionsTable';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [category, CategoryDropdown] = useDropdown('Category', '', categories);

  useEffect(() => {
    Api.get('/api_category.php').then(({ data }) => {
      const { trivia_categories } = data;
      setCategories(trivia_categories || []);
    });
  }, []);

  useEffect(() => {
    if (!category || isNaN(category)) return;

    setQuestions([]);

    Api.get('/api.php', {
      params: {
        amount: 10,
        category
      }
    }).then(({ data }) => {
      const { results } = data;
      setQuestions(results || []);
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
            <QuestionsTable questions={questions} />
          ) : (
            ''
          )}
        </div>
      </article>
    </section>
  );
};

export default HomePage;
