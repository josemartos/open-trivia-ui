import { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import QuestionContext from '../../context/QuestionContext';

const PageRoot = ({ children }) => {
  const [preload, setPreload] = useState('preload');
  const question = useState({});

  useEffect(() => {
    setPreload('');
  }, []);

  return (
    <div className={`page-root ${preload}`}>
      <Header />
      <QuestionContext.Provider value={question}>
        <main className="page-main">
          <section>{children}</section>
        </main>
      </QuestionContext.Provider>
      <Footer />
    </div>
  );
};

export default PageRoot;
