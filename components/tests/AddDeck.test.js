import React from 'react';
import AddDeck from '../AddDeck';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<AddDeck />).toJSON();
  expect(rendered).toBeTruthy();
});
