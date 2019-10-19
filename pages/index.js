import Head from 'next/head';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Open Trivia UI - Home</title>
      </Head>
      <article className="home-page">
        <div className="page-container">List of trivia questions</div>
      </article>
    </div>
  );
};

export default HomePage;
