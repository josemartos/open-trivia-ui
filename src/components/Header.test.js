import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';

describe('Header', () => {
  test('renders the Header', () => {
    const header = shallow(<Header />);

    expect(header.length).toEqual(1);
  });
});
