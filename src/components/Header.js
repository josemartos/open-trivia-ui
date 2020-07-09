import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import TriviaIcon from 'assets/svg/trivia-icon.svg';

import mediaQuery from 'src/helpers/mediaQuery';

const HeaderInner = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  padding: 1rem;

  ${mediaQuery.sm} {
    justify-content: center;
  }
`;

const HeaderLogo = styled.div`
  margin-right: 1rem;
`;

const Header = () => {
  return (
    <header>
      <div className="page-container">
        <HeaderInner>
          <HeaderLogo>
            <Link href="/">
              <a title="Open Trivia UI">
                <TriviaIcon width="64" height="64" />
              </a>
            </Link>
          </HeaderLogo>

          <h1>Open Trivia UI</h1>
        </HeaderInner>
      </div>
    </header>
  );
};

export default Header;
