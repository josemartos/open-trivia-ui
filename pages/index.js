import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Api from 'src/utils/Api';
import { useQuestionContext } from 'src/context/QuestionContext';
import { resetQuestion } from 'src/context/actions';
import mediaQuery from 'src/helpers/mediaQuery';

import useDropdown from 'src/components/useDropdown';
import QuestionsTable from 'src/components/QuestionsTable';

const DropdownWrapper = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.space.medium};
  justify-content: flex-start;

  ${mediaQuery.sm} {
    justify-content: center;
  }
`;

const HomePage = () => {
  const { selectedQuestion, dispatch } = useQuestionContext();
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
    <section>
      <Head>
        <title>Open Trivia UI - Home</title>
      </Head>
      <article>
        <div className="page-container">
          <DropdownWrapper>
            <CategoryDropdown />
          </DropdownWrapper>
          {categoryId && questions && (
            <QuestionsTable categoryId={categoryId} questions={questions} />
          )}
        </div>
      </article>
    </section>
  );
};

export default HomePage;
