import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  padding: 1rem 0;
  font-size: ${({ theme }) => theme.fontSizes.s12};
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="page-container">
        <div>
          Icon made by{' '}
          <a
            href="https://www.flaticon.com/authors/prosymbols"
            title="Prosymbols"
          >
            Prosymbols
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
