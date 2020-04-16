import React from 'react';
import Link from 'next/link';
import TriviaIcon from 'assets/svg/trivia-icon.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="page-container">
        <div className="header-inner">
          <Link href="/">
            <a title="Open Trivia UI" className="header-logo">
              <TriviaIcon width="64" height="64" />
            </a>
          </Link>

          <h1>Open Trivia UI</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
