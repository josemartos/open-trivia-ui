import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer.js';

describe('Footer', () => {
  test('renders the Footer', () => {
    const footer = shallow(<Footer />);

    expect(footer.length).toEqual(1);
  });
});
