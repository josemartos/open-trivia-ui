import Head from 'next/head';
import { useEffect, useState } from 'react';
import Api from '../utils/Api';
import useDropdown from '../components/useDropdown';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [category, CategoryDropdown] = useDropdown('Category', '', categories);

  useEffect(() => {
    Api.get('/api_category.php').then(({ data }) => {
      const { trivia_categories } = data;
      setCategories(trivia_categories || []);
    });
  }, []);

  useEffect(() => {
    if (!category) return;

    console.log('Do something!', category);
  }, [category]);

  return (
    <div>
      <Head>
        <title>Open Trivia UI - Home</title>
      </Head>
      <article className="home-page">
        <div className="page-container">
          <CategoryDropdown />
        </div>
      </article>
    </div>
  );
};

export default HomePage;
