import { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const PageRoot = ({ children }) => {
  const [preload, setPreload] = useState('preload');

  useEffect(() => {
    setPreload('');
  }, []);

  return (
    <div className={`page-root ${preload}`}>
      <Header />
      <main className="page-main">
        <section>{children}</section>
      </main>
      <Footer />
    </div>
  );
};

export default PageRoot;
